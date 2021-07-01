import logo from './logo.svg';
import './App.css';
import InputForm from "./components/InputForm/InputForm";
import TagConteiner from "./components/TagConteiner/TagConteiner";
import TaksConteiner from "./components/TaksConteiner/TaksConteiner";
import { useEffect, useState } from 'react';

function App() {

  const [task, setTask] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(async () => {
    let newTagks = [...tags];
    await fetch('http://localhost:7777/tasks')
    .then(res => res.json())
    .then(data => {
      setTask(data);
      data.forEach(element => {
        newTagks = [ ...newTagks, ...element.tags];
      });
    })
    setTags(newTagks);
  }, [])
  
  const findTags = string => string.split(' ').filter(item => item.startsWith('#'));

  const sendTask = async newTask => {
    await fetch('http://localhost:7777/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({task: newTask, tags: findTags(newTask)})
    })
    setTask([...task, {task: newTask}]);
    if (findTags(newTask).length != 0) {
      setTags([...tags, ...findTags(newTask)]);
    }
  }
  
  return (
    <div className="App">
      <TagConteiner tags={tags} />
      <InputForm sendTask={sendTask} />
      <TaksConteiner findTags={findTags} task={task} />
    </div>
  );
}

export default App;
