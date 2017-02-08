import { combineReducers, createStore, compose } from 'redux';
import reducers from 'reducers';

const configure = () => {
  const reducer = combineReducers({
    searchText: reducers.searchTextReducer,
    showCompleted: reducers.showCompletedReducer,
    todos: reducers.todosReducer
  });

  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};

export default configure();