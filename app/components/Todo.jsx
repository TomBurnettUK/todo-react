import React from 'react';

class Todo extends React.Component {
  render() {
    const {id, text, completed, onToggle} = this.props;

    return (
      <div onClick={() => { onToggle(id) }}>
        <input type="checkbox" defaultChecked={completed}/>
        {text}
      </div>
    );
  }
}

Todo.propTypes = {
  id: React.PropTypes.string,
  text: React.PropTypes.string,
  completed: React.PropTypes.bool,
  onToggle: React.PropTypes.func
}

export default Todo;