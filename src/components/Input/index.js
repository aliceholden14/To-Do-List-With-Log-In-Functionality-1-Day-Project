import React, { useState } from "react";
import "./input.css";

function Input({ addItemToList }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        id="input"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button
        className="inputButton"
        onClick={() => {
          addItemToList(text);
        }}
      >
        Add To List!
      </button>
    </div>
  );
}

export default Input;
