import React from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    
    const { dispatch } = this.props;
    const todoText = this.refs.todoText.value;
    this.refs.todoText.value = '';
    this.refs.todoText.focus();

    if (todoText.length > 0) {
      dispatch(actions.startAddTodo(todoText));
    }
  }
  
  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input ref="todoText" type="text" placeholder="Enter todo text"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  dispatch: React.PropTypes.func
}

export default connect()(AddTodo);