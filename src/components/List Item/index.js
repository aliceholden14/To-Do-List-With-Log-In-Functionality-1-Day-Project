import React from "react";
import "./listitem.css";

function ListItem({ text, deleteListItem, applyStrikeThrough }) {
  return (
    <li>
      <span
        onClick={(e) => {
          applyStrikeThrough(e);
        }}
      >
        {text}
      </span>
      <button
        className="deleteItemButton"
        onClick={() => {
          deleteListItem(text);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default ListItem;
