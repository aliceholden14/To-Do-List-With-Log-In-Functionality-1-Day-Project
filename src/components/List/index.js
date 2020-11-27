import React from "react";
import ListItem from "../List Item/index.js";
import "./list.css";

function List({ array, deleteListItem, applyStrikeThrough }) {
  return (
    <ul className="listBox">
      {array.map((item) => {
        return (
          <ListItem
            text={item}
            deleteListItem={deleteListItem}
            applyStrikeThrough={applyStrikeThrough}
          />
        );
      })}
    </ul>
  );
}

export default List;
