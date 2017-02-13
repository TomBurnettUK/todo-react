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

    it('should update completed state of todo', () => {
      const todos = [{
        id: 'abc',
        text: 'Test text',
        completed: true,
        createdAt: 100,
        completedAt: 200
      }];
      
      const updates = {
        completed: false,
        completedAt: null
      };

      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      const res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toBe(updates.completed);
      expect(res[0].completedAt).toBe(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
  });
});