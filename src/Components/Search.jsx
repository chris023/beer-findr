import React, { Component } from 'react';

import '../Styles/Search.css';
// import { coloradoBeer, coloradoBreweries } from '../beer-data';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      autoSuggestions: [],
      coloradoBeers: [],
      coloradoBreweries: [],
      searchQuery: ''
    }
  }

  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/coloradoBeer')
      .then(response => response.json())
      .then(triviaQuestions => {
        this.setState({
          coloradoBeers: coloradoBeer,
        })
      })
      .catch(error => console.log(error));

    fetch('https://whateverly-datasets.herokuapp.com/api/v1/coloradoBreweries')
      .then(response => response.json())
      .then(triviaQuestions => {
        this.setState({
          coloradoBreweries: coloradoBreweries,
        })
      })
      .catch(error => console.log(error))
    
  }

  searchBeers = (e) => {
    e.preventDefault()
    //invoked when search button is clicked
    let results = this.state.coloradoBeers.filter((beer) => {

      let styleIncludes = beer.style.find((style) => {
        return style.toLowerCase().includes(this.state.searchQuery) 
      })
      let notesIncludes = beer.tastingNotes.find((note) => {
        return note.toLowerCase().includes(this.state.searchQuery)
      })

      return styleIncludes || notesIncludes
    })

    this.props.setSearchResults(results);
  }

  autoComplete = (e) => {
    //completes user input as they type into search
    this.setState({
      searchQuery: e.target.value.toLowerCase()
    })
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Style or Taste Profile" onChange={ this.autoComplete } />
        <button onClick={ this.searchBeers } >Search</button>
      </form>
    )
  }
}

export default Search;
