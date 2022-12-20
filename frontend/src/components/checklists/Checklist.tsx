import React, { useState } from "react";
import Task from "./tasks";

function Checklist() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([""]);

  function inpChange(event: any) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function addNew() {
    setItems((oldItems) => {
      return [...oldItems, inputText];
    });
    setInput("");
  }

  function deleteItem(id: number) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>What Should I Ask My Provider</h1>
        <p>
          Here are questions about labor induction that might be specific to the
          place you'll give birth. You can edit the list and bring it with you
          to talk about during your prenatal care visit!
        </p>
      </div>
      <div className="form">
        <input onChange={inpChange} type="text" value={inputText} />
        <button onClick={addNew}>
          <span>+</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <Task key={index} id={index} text={item} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Checklist;
