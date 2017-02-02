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
  }
};