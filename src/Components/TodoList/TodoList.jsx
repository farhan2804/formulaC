import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setData(event.target.value);
    setMessage("");
  };

  const handleClick = () => {

    if(!data.trim()) {
      setMessage("⚠️Empty task cannot be added");
      return;
    } 

    if(items.length >=5) {
       setMessage("⚠️Delete task to add more");
       return;
    }
    setItems([...items, data]);
    setMessage("✅ Successfully Added Task")
    setData("");
  };
  console.log(items);

  const handleDelete = (id) => {
    console.log(id);
    setItems(items.filter((_, index) => index !== id));
    setMessage("");
  };

  return (
    <div className="todo-container">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add Tasks"
        value={data}
      />
      <button onClick={handleClick}>+</button>
     
      <ul>
        {items.map((val, id) => (
          <li key={id}>
            {val}
            <button onClick={() => handleDelete(id)}>x</button>
          </li>
        ))}
      </ul>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default TodoList;
