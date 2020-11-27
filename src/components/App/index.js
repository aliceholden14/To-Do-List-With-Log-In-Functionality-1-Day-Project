import React, { useState } from "react";
import "./App.css";

import List from "../List/index.js";
import Input from "../Input/index.js";
import DeleteAllButton from "../DeleteListButton/index.js";

function App() {
  const [list, setList] = useState([]);

  function addItemToList(text) {
    setList([...list, text]);
  }
  function deleteListItem(text) {
    const index = list.findIndex((item) => {
      return item === text;
    });
    const a = list.slice(0, index);
    const b = list.slice(index + 1);
    setList([...a, ...b]);
  }

  function deleteAllListItems() {
    setList([]);
  }

  function applyStrikeThrough(e) {
    console.log(e);
    return (e.target.style.textDecoration = "line-through");
  }

  // style={{fontFamily: `${font}`}}

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Input className="input" addItemToList={addItemToList} />
      <List
        array={list}
        deleteListItem={deleteListItem}
        applyStrikeThrough={applyStrikeThrough}
      />
      <DeleteAllButton deleteAllListItems={deleteAllListItems} />
    </div>
  );
}

export default App;
