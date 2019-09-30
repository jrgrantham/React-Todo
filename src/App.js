import React from "react";
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "test entry 1",
          completed: false
        },
        {
          id: 2,
          description: "test entry 2",
          completed: false
        }
      ],
      newTodoName: ""
    };
  }

  onNewTodo = () => {
    this.setState(currentState => {
      return {
        newTodoName: "",
        todos: currentState.todos.concat({
          id: Date.now(),
          description: currentState.newTodoName,
          completed: false
        })
      };
    });
  };

  toggleComplete = (id, event) => {
    this.setState(currentState => {
      return {
        todos: currentState.todos.map(todo => {
          if (id !== todo.id) {
            return todo;
          } else {
            return {
              id: todo.id,
              description: todo.description,
              completed: todo.completed === true ? false : true,
            }
          }
        })
      }
    })
  }

  filterCompleted = () => {
    this.setState(currentState => {
      return {
        todos: currentState.todos.filter(todo => {
          return todo.completed === false;
        })
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          toggleComplete={this.toggleComplete}
          todos={this.state.todos}
        />

        <input
          value={this.state.newTodoName}
          onChange={event =>
            this.setState({
              newTodoName: event.target.value
            })
          }
        />

        <button onClick={this.onNewTodo}>add entry</button>
        <br></br>
        <button
          onClick={this.filterCompleted}
        >clear completed</button>
      </div>
    );
  }
}

export default App;
