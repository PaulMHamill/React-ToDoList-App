import React, {useState} from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { name: "Buy Shopping", isPriority: true},
    { name: "Clean Bathroom", isPriority: false},
    { name: "Car's MOT", isPriority: true},
  ]);

  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("")

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index} className={ task.isPriority? "High-Priority" : "Low-Priority" }>
        <span>
          { task.name }
        </span>
      </li>
    )
});

  const handleTaskInput = (event) => {
    console.log(event.target)
    setNewTask(event.target.value);
  };

  const handlePriority = (event) => {
    setNewPriority(event.target.value);
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, isPriority: false})
    setTasks(copyTasks)
    setNewTask("")
  };

  const prioritiseTask = (index) => {
    // create a copy of the tasks array
      const copyTasks = [...tasks]
      // Update the isPriority property of the item at index
      copyTasks[index].isPriority = true;
        return 
      // Set the new state
      setTasks(copyTasks)
    }


  return (
    <div className="App">
      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {taskNodes}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add a new task:</label>  
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>
        <div onChange={handlePriority}>           
        <label><input type="radio" value="true" name='priority' />High Priority</label>
        <label><input type="radio" value="false" name='priority'/>Low Priority</label>
        </div>
        <input type="submit" value="Save New Task" />
      </form>

    </div>
  );
}

export default App;
