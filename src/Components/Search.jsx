import React, { Component } from 'react';

import '../Styles/Search.css';

class Search extends Component {

  render() {
    return (
      <form>
        <input type="text" placeholder="Style or Taste Profile" />
        <button>Search</button>
      </form>
    )
  }
}

export default Search;