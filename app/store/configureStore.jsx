import { combineReducers, createStore, compose } from 'redux';
import reducers from 'reducers';

export const configure = (init = {}) => {
  const reducer = combineReducers({
    searchText: reducers.searchTextReducer,
    showCompleted: reducers.showCompletedReducer,
    todos: reducers.todosReducer
  });

  const store = createStore(reducer, init, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};

export default configure();