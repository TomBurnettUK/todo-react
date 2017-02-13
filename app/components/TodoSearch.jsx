import React from 'react';
import { connect } from 'react-redux';
import actions from 'actions';

export class TodoSearch extends React.Component {
  constructor(props) {
    super(props);

    this.todoSearch = this.todoSearch.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  todoSearch() {
    const { dispatch } = this.props;
    const searchText = this.refs.searchText.value;
    dispatch(actions.setSearchText(searchText));
  }

  toggleCompleted() {
    const { dispatch } = this.props;
    dispatch(actions.toggleShowCompleted());
  }

  render() {
    const { showCompleted, searchText } = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={this.todoSearch}/>
        </div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={this.toggleCompleted}/>
            <p>Show completed todos</p>
          </label>
      </div>
    );
  }
}

TodoSearch.propTypes = {
  dispatch: React.PropTypes.func,
  showCompleted: React.PropTypes.bool,
  searchText: React.PropTypes.string
};

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoSearch);