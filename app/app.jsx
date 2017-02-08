import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import actions from 'actions';
import store from 'configureStore';

import TodoApp from 'TodoApp';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.addTodo('Clean yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);