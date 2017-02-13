import firebase, { firebaseRef } from 'app/firebase';
import moment from 'moment';

export default {
  setSearchText(searchText) {
    return {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
  },

  addTodo(todo) {
    return {
      type: 'ADD_TODO',
      todo
    };
  },

  startAddTodo(text) {
    return (dispatch, getState) => {
      const todo = {
        text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null
      };
      const todoRef = firebaseRef.child('todos').push(todo);

      return todoRef.then(() => {
        dispatch(this.addTodo({
          ...todo,
          id: todoRef.key
        }));
      });
    };
  },

  addTodos(todos) {
    return {
      type: 'ADD_TODOS',
      todos
    };
  },

  toggleShowCompleted() {
    return {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
  },

  toggleTodo(id) {
    return {
      type: 'TOGGLE_TODO',
      id
    };
  }
}
