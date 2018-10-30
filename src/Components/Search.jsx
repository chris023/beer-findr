import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      autoSuggestions: [],
      results: []
    }
  }

  searchBeers = () => {
    //invoked when search button is clicked
  }

  autoComplete = () => {
    //completes user input as they type into search
  }

  render() {
    return (
      <div className="Search">
        <form>
          <input type="text" placeholder="Style or Taste Profile" onChange={ this.autoComplete } />
          <button onClick={ this.searchBeers } >Search</button>
        </form>
      </div>
    )
  }
}

export default Search;