import logo from './logo.svg';
import './App.css';
import InputForm from "./components/InputForm/InputForm";
import TagConteiner from "./components/TagConteiner/TagConteiner";
import TaksConteiner from "./components/TaksConteiner/TaksConteiner";
import { useEffect, useState } from 'react';

function App() {

  const [task, setTask] = useState([]);

  useEffect(async () => {
    await fetch('http://localhost:7777/tasks')
    .then(res => res.json())
    .then(data => setTask(data))
  }, [])

  const sendTask = async newTask => {
    await fetch('http://localhost:7777/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({task: newTask})
    })
    setTask([...task, {task: newTask}])
  }

  return (
    <div className="App">
      <InputForm sendTask={sendTask} />
      <TagConteiner task={task} />
      <TaksConteiner task={task} />
    </div>
  );
}

export default App;
