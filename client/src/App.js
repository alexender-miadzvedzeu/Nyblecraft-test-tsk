import './App.css';
import InputForm from "./components/InputForm/InputForm";
import TagConteiner from "./components/TagConteiner/TagConteiner";
import TaksConteiner from "./components/TaksConteiner/TaksConteiner";
import {
  useEffect,
  useState
} from 'react';

function App() {

  const [task, setTask] = useState([]);

  useEffect(() => {
    getTasks();
  }, [])

  const getTasks = async () => {
    await fetch('http://localhost:7777/tasks')
      .then(res => res.json())
      .then(data => {
        setTask(data);
      })
  }

  const sendTask = async newTask => {
    await fetch('http://localhost:7777/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        task: newTask,
        tags: findTags(newTask)
      })
    })
    getTasks();
  }

  const removeTask = async id => {
    await fetch('http://localhost:7777/tasks', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    });
    getTasks();
  }

  const findTags = string => string.split(' ').filter(item => item.startsWith('#'));
  
  return (
    <div className="App">
      <TagConteiner task={task} />
      <InputForm sendTask={sendTask} />
      <TaksConteiner removeTask={removeTask} task={task} />
    </div>
  );
}

export default App;
