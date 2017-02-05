import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  beforeEach(() => localStorage.clear());

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      const todos = [{
        id: 'abc',
        text: 'Test',
        completed: false
      }];

      TodoAPI.setTodos(todos);
      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      const badTodos = { not: 'right' };

      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array if storagedata invalid', () => {
      const actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos array if storagedata valid', () => {
      const todos = [{
        id: 'abc',
        text: 'Test',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });

    describe('filterTodos', () => {
      const todos = [
        { id: 'abc', text: 'First', completed: true },
        { id: 'def', text: 'Second', completed: false },
        { id: 'ghi', text: 'Third', completed: true }
      ];

      it('should return all items if showCompleted is true', () => {
        const filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos.length).toBe(3);
      });

      it('should not return completed items if showCompleted is false', () => {
        const filteredTodos = TodoAPI.filterTodos(todos, false, '');
        expect(filteredTodos.length).toBe(1);
      });

      it('should sort by completed status', () => {
        const filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos[0].completed).toBe(false);
      });

      it('should filter todos by searchText', () => {
        const filteredTodos = TodoAPI.filterTodos(todos, true, 'Ir');
        expect(filteredTodos.length).toBe(2);
      });

      it('should return all todos if searchText is empty', () => {
        const filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos.length).toBe(3);
      });
    });
  });
});