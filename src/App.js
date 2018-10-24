import React, { Component } from 'react';
import './App.css';

import Search from './Components/Search';
import CardContainer from './Components/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      cardContainerVisible: false,
      view: 0
    }
  }

  setSearchResults = (searchResults) => {
    this.setState({
      searchResults: searchResults
    })

    if (searchResults.length)
      this.setState({
        view: 1
      })
  }

  setCardContainerVisible = (visibility) => {
    this.setState({
      cardContainerVisible: visibility
    })
  }

  render() {
    return (
      <div className="App">
        <div className="inside-App">
          <h1>Beer Findr</h1>
          <h2>Search Colorado's Best Beers</h2>
          <div className="center Search-container">
            <Search setSearchResults={this.setSearchResults} />
          </div>
          <div className="center Card-container">
            <CardContainer 
              setCardContainerVisible={this.setCardContainerVisible} 
              results={this.state.searchResults} 
              view={this.state.view}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
