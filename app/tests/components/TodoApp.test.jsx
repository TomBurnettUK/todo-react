import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import { configure } from 'configureStore';
import TodoList from 'TodoList';
import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    const provider = TestUtils.renderIntoDocument(
      <Provider store={configure()}>
        <TodoApp/>
      </Provider>
    );

    const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});