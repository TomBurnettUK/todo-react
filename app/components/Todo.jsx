import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
  render() {
    const {id, text, completed, onToggle, createdAt, completedAt} = this.props;
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
      <div className={todoClassName} onClick={() => { onToggle(id) }}>
        <div>
          <input type="checkbox" defaultChecked={completed}/>
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
  completedAt: React.PropTypes.number
}

export default Todo;