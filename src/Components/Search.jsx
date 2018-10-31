import React, { Component } from 'react';
import magnifier from '../assets/magnifier.svg';
import '../Styles/Search.scss';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      autoSuggestions: [],
      searchQuery: ''
    }
  }

  showAllBeers = (e) => {
    this.props.setSearchResults(this.props.beers);
  }

  searchBeers = (e) => {
    e.preventDefault()
    let results = this.search(this.state.searchQuery);
    this.props.setSearchResults(results);
  }

  search = (searchQuery) => {
    return this.props.beers.filter((beer) => {

      let styleIncludes = beer.style.find((style) => {
        return style.toLowerCase().includes(searchQuery)
      })
      let notesIncludes = beer.tastingNotes.find((note) => {
        return note.toLowerCase().includes(searchQuery)
      })

      return styleIncludes || notesIncludes
    })
  }

  autoComplete = (e) => {
    this.setState({
      searchQuery: e.target.value.toLowerCase()
    })
  }

  render() {
    return (
      <div className="Search">
        <form>
          <input type="text" placeholder="Style or Taste Profile" onChange={ this.autoComplete } />
          <button onClick={this.searchBeers} >
            <img src={magnifier} alt=""/>
          </button>
        </form>
        <p className="search-help" onClick={ this.showAllBeers}>Search to view all</p>
      </div>
    )
  }
}

export default Search;