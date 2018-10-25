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
      view: 0,
      coloradoBeers: [],
      coloradoBreweries: [],
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

  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/coloradoBeer')
      .then(response => response.json())
      .then(data => {
        this.setState({
          coloradoBeers: data.coloradoBeer,
        })
      })
      .catch(error => console.log(error));

    fetch('https://whateverly-datasets.herokuapp.com/api/v1/coloradoBreweries')
      .then(response => response.json())
      .then(data => {
        this.setState({
          coloradoBreweries: data.coloradoBreweries,
        })
      })
      .catch(error => console.log(error))
    
  }

  render() {
    return (
      <div className="App">
        <div className="inside-App">
          <h1>Beer Findr</h1>
          <h2>Search Colorado's Best Beers</h2>
          <div className="center Search-container">
            <Search 
              beers={this.state.coloradoBeers} 
              setSearchResults={this.setSearchResults}
            />
          </div>
          <div className="center Card-container">
            <CardContainer 
              setCardContainerVisible={this.setCardContainerVisible} 
              results={this.state.searchResults} 
              breweries={this.state.coloradoBreweries}
              view={this.state.view}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
