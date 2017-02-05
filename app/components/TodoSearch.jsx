import React from 'react';

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);

    this.todoSearch = this.todoSearch.bind(this);
  }

  todoSearch() {
    const showCompleted = this.refs.showCompleted.checked;
    const searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.todoSearch}/>
        </div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.todoSearch}/>
            <p>Show completed todos</p>
          </label>
      </div>
    );
  }
}

TodoSearch.propTypes = {
  onSearch: React.PropTypes.func
};

export default TodoSearch;