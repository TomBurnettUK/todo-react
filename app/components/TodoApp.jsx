import React from 'react';
import { connect } from 'react-redux';

import actions from 'actions';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(e) {
    const { dispatch } = this.props;

    e.preventDefault();

    dispatch(actions.startLogout());
  }

  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>

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

TodoApp.propTypes = {
  dispatch: React.PropTypes.func
};

export default connect()(TodoApp);