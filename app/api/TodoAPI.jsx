import $ from 'jquery';

export default {
  setTodos(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos() {
    const todosString = localStorage.getItem('todos');
    let todos = []

    try {
      todos = JSON.parse(todosString);
    } catch (e) {
      throw e;
    }
    
    return $.isArray(todos) ? todos : [];
  },

  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => !todo.completed || showCompleted);

    filteredTodos = filteredTodos.filter((todo) => {
      if (searchText === '') {
        return true;
      }

      const searchTextLower = searchText.toLowerCase();
      const todoTextLower = todo.text.toLowerCase();
      
      return (todoTextLower.indexOf(searchTextLower) !== -1);
    });

    filteredTodos.sort((a, b) => {
      if (a.completed && !b.completed) {
        return 1;
      } else if(!a.completed && b.completed) {
        return -1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};