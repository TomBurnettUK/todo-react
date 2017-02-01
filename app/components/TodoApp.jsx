import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Do the dishes'
        },
        {
          id: 4,
          text: 'Take out trash'
        }
      ]
    };
  }

  handleAddTodo(todoText) {
    alert('new todo: ' + todoText);
  }

  render() {
    const {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

export default TodoApp;