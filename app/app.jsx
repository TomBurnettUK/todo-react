import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import actions from 'actions';
import store from 'configureStore';
import TodoAPI from 'TodoAPI';

import TodoApp from 'TodoApp';

store.subscribe(() => {
  const state = store.getState();
  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);