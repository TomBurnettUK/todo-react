import expect from 'expect';
import df from 'deep-freeze-strict';

import reducers from 'reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Test'
      };
      const res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      const res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc',
          text: 'Test',
          completed: false,
          createdAt: 1000
        }
      };

      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add existing todos', () => {
      const todos = [{
        id: 'abc',
        text: 'Test',
        completed: false,
        completedAt: undefined,
        createdAt: 1000
      }];
      const action = {
        type: 'ADD_TODOS',
        todos
      };

      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should toggle completed state of todo', () => {
      const action = {
        type: 'TOGGLE_TODO',
        id: 'abc'
      };

      const state = [{
        id: 'abc',
        text: 'Test text',
        completed: false,
        createdAt: 100,
        completedAt: undefined
      }];

      const res = reducers.todosReducer(df(state), df(action));

      expect(res.length).toBe(1);
      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toNotBe(undefined);
    });
  });
});