import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import actions from 'actions';
import store from 'configureStore';

import TodoApp from 'TodoApp';

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);