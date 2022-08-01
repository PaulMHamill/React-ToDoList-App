import React, {useState} from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { name: "Buy Shopping"},
    { name: "Clean Bathroom"},
    { name: "Car's MOT"},
  ]);

  const [newItem, setNewItem] = useState("");

  const itemNodes = items.map((item, index) => {
    return(
        <li key={index}><span>{item.name}</span></li>
    )
});

  const handleItemInput = (event) => {
    setNewItem(event.target.value);
  };

  const saveNewItem = (event) => {
    event.preventDefualt();
    const copyItems = [...items]
    copyItems.push({name: newItem})
    setItems(copyItems)
    setNewItem("")
  };


  return (
    <div className="App">
      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {itemNodes}
      </ul>

      <form onSubmit={saveNewItem}>
        <label htmlFor="new-item">Add a new item:</label>  
        <input id="new-item" type="text" value={newItem} onChange={handleItemInput}/>           
        <input type="submit" value="Save New Item" />
      </form>

    </div>
  );
}

export default App;
