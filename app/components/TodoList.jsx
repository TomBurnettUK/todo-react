import React from 'react';
import Todo from 'Todo';

class TodoList extends React.Component {
  render() {
    const {todos, onToggle} = this.props;

    const renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} onToggle={onToggle} {...todo}/>
        );
      })
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array,
  onToggle: React.PropTypes.func
}

export default TodoList;
