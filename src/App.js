import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './Components/Search';
import CardContainer from './Components/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    }
  }

  setSearchResults = () => {

  }

  render() {
    return (
      <div>
        <h1>Beer Findr</h1>
        <h2></h2>
        <Search setSearchResults={ this.setSearchResults } />
        <CardContainer results={ this.state.searchResults } />
      </div>
    );
  }
}

export default App;
