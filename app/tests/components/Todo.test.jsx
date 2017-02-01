import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import Todo from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle with id', () => {
    const todoData = {
      id: 'abc',
      text: 'Test',
      completed: true
    };
    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    const $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el.find('input')[0]);

    expect(spy).toHaveBeenCalledWith(todoData.id);
  });
});