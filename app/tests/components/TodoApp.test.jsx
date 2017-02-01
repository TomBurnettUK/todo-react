import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to state', () => {
    const todoText = 'Test';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({ todos: [] });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos.length).toBe(1);
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed state', () => {
    const todoData = {
      id: 'abc',
      text: 'Test',
      completed: false
    };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({ todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle('abc');
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});