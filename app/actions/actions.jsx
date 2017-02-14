import firebase, { firebaseRef, githubProvider } from 'app/firebase';
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
      const uid = getState().auth.uid;
      const todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

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

  startAddTodos() {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const todosRef = firebaseRef.child(`users/${uid}/todos`);

      return todosRef.once('value').then((snapshot) => {
        const todos = snapshot.val() || {};

        const parsedTodos = Object.keys(todos).map((key) => {
          return {
            ...todos[key],
            id: key
          }
        });

        dispatch(this.addTodos(parsedTodos));
      });
    };
  },

  toggleShowCompleted() {
    return {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
  },

  updateTodo(id, updates) {
    return {
      type: 'UPDATE_TODO',
      id,
      updates
    };
  },

  startToggleTodo(id, completed) {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
      const updates = {
        completed,
        completedAt: completed ? moment().unix() : null
      };

      return todoRef.update(updates).then(() => {
        dispatch(this.updateTodo(id, updates));
      });
    };
  },

  login(uid) {
    return {
      type: 'LOGIN',
      uid
    };
  },

  startLogin() {
    return (dispatch, getState) => {
      return firebase.auth().signInWithPopup(githubProvider).then((result) => {
        console.log('Auth success!', result);
      }).catch((e) => {
        console.log(e);
      });
    };
  },

  logout() {
    return {
      type: 'LOGOUT'
    };
  },

  startLogout() {
    return (dispatch, getState) => {
      return firebase.auth().signOut().then(() => {
        console.log('Logout success!');
      });
    };
  }
}
