import React, { useState } from "react";
import "./App.css";

import List from "../List/index.js";
import Input from "../Input/index.js";
import DeleteAllButton from "../DeleteListButton/index.js";
import LoginButton from "../Login/index";
import LogoutButton from "../LogOut/index";
import Profile from "../UserProfile/index";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [list, setList] = useState([]);
  const { isLoading, isAuthenticated } = useAuth0();

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
  if (isLoading) return <div>is loading...</div>;
  if (!isAuthenticated)
    return (
      <div>
        {" "}
        <h1>To Do List</h1>
        <LoginButton />
      </div>
    );

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Profile />
      <Input className="input" addItemToList={addItemToList} />
      <List
        array={list}
        deleteListItem={deleteListItem}
        applyStrikeThrough={applyStrikeThrough}
      />
      <DeleteAllButton deleteAllListItems={deleteAllListItems} />

      <LogoutButton />
    </div>
  );
}

export default App;
