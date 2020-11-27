import React from "react";
import "./deleteListButton.css";

function DeleteAllButton({ deleteAllListItems }) {
  return (
    <button className="deleteAll" onClick={deleteAllListItems}>
      Delete all
    </button>
  );
}

export default DeleteAllButton;

//import React
//create a functional component called deleteAllButton
// this should render a button to the page
//on click this button should clear the contents of the list array by setList([])
// the function will be written in app/index.js
//export/import into app/index.js
