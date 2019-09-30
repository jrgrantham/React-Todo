// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    // toggleComplete = this.props.toggleComplete;
    console.log(this.props);

    const todos = this.props.todos;
    return (
      <>
        {todos.map(item => (
          <div key={item.id}>
            <h3
              className={item.completed ? 'completed' : 'incomplete'}
              onClick={event => this.props.toggleComplete(item.id, event)}>
              {item.description}
            </h3>
          </div>
        ))}
      </>
    );
  }
}
