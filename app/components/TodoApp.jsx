import React from 'react';
import uuid from 'uuid/v4';
import moment from 'moment';

import TodoAPI from 'TodoAPI';

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;