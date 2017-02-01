import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const todoText = this.refs.todoText.value;
    this.refs.todoText.value = '';
    this.refs.todoText.focus();

    if (todoText.length > 0) {
      this.props.onAddTodo(todoText);
    }
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref="todoText" type="text" placeholder="Enter todo text"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: React.PropTypes.func
};

export default AddTodo;