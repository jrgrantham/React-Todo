// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

export default function ToDoList(props) {
  const todoList = this.state.list
  return (
    <>
      {todoList.map(item => (
        <div key={item.id}>{item.description}</div>
      ))}
    </>
  );
}