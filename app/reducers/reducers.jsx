import uuid from 'uuid';
import moment from 'moment';

export default {
  searchTextReducer(state = '', action) {
    switch (action.type) {
      case 'SET_SEARCH_TEXT':
        return action.searchText;
    
      default:
        return state;
    }
  },

  showCompletedReducer(state = false, action) {
    switch (action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
        return !state;
    
      default:
        return state;
    }
  },

  todosReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          action.todo
        ];

      case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ];

      case 'TOGGLE_TODO':
        return state.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed ? moment().unix() : undefined
            };
          } else {
            return todo;
          }
        });

      default:
        return state;
    }
  }
};