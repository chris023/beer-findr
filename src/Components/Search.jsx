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

  searchBeers = (e) => {
    e.preventDefault()
    let results = this.props.beers.filter((beer) => {

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
      </div>
    )
  }
}

export default Search;
