import React from "react";

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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        {this.state.todos.map(item => (
          <div key={item.id}>
            {item.id} {item.description}
            <button>complete</button>
          </div>
        ))}

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
        <button>clear completed</button>
      </div>
    );
  }
}

export default App;
