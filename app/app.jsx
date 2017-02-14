import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import actions from 'actions';
import store from 'configureStore';
import TodoAPI from 'TodoAPI';

import TodoApp from 'TodoApp';

store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);