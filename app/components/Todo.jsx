import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import actions from 'actions';

export class Todo extends React.Component {
  render() {
    const {id, text, completed, onToggle, createdAt, completedAt, dispatch} = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';

    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => { dispatch(actions.startToggleTodo(id, !completed)); }}>
        <div>
          <input type="checkbox" checked={completed} readOnly="true"/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
       
      </div>
    );
  }
}

Todo.propTypes = {
  id: React.PropTypes.string,
  text: React.PropTypes.string,
  completed: React.PropTypes.bool,
  onToggle: React.PropTypes.func,
  createdAt: React.PropTypes.number,
  completedAt: React.PropTypes.number,
  dispatch: React.PropTypes.func
}

export default connect()(Todo);