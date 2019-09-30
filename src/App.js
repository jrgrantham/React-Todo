import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          item: 'test entry 1',
          completed: false,
        },
        {
          id: 2,
          item: 'test entry 2',
          completed: false,
        }
      ],
      newEntryForm: '',
    }
  }

  render() {

    const todoList = this.state.list;
    console.log(this.state.list);
    console.log(todoList);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {todoList.map(item => (
          <div key={item.id}>
            {item.item}
          </div>
        ))}

      </div>
    );
  }
}

export default App;
