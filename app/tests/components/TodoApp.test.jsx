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
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle to completed', () => {
    const todoData = {
      id: 'abc',
      text: 'Test',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({ todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle('abc');

    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle from completed', () => {
    const todoData = {
      id: 'abc',
      text: 'Test',
      completed: true,
      createdAt: 0,
      completedAt: 1
    };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({ todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(true);

    todoApp.handleToggle('abc');

    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});