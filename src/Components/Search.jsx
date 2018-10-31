import React, { Component } from 'react';

import magnifier from '../assets/magnifier.svg'; 
import Trie from '@ashtonkb/autocomplete';

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
    //invoked when search button is clicked
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
    //1 instantiate a new Trie
    let trie = new Trie();
    //2 trie.populate it with whatever data a user can search for
    let completableWords = this.props.beers.filter((beer) => {
      let styles = beer.style.find((style) => {
        return style.toLowerCase().includes(this.state.searchQuery) 
      })
      let notes = beer.tastingNotes.find((note) => {
        return note.toLowerCase().includes(this.state.searchQuery)
      })

      return styles && notes
    });
    trie.populate(completableWords);
    //3 the input that comes in from onchage event should be included in trie.suggest
    let lettersToFind = e.target.value;
    let searchSuggestions = trie.suggest(lettersToFind);
    //4 save the suggestions as the state (autoSuggestions)
    this.setState({
      autoSuggestions: searchSuggestions
      // searchQuery: e.target.value.toLowerCase()
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
