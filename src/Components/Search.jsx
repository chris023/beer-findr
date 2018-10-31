import React, { Component } from 'react';
import '../Styles/Search.scss';

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

    let styles = this.props.beers.reduce((styles, currBeer) => {
      styles.push(...currBeer.style);
      return styles
    }, []);

    let notes = this.props.beers.reduce((notes, currBeer) => {
      notes.push(...currBeer.tastingNotes);
      return notes
    }, []);

    let completableWords = styles.concat(notes);
  
    trie.populate(completableWords);
    //3 the input that comes in from onchage event should be included in trie.suggest
    let lettersToFind = e.target.value;
    let searchSuggestions = [];
    if (e.target.value !== '') {
      searchSuggestions = trie.suggest(lettersToFind);
      //4 save the suggestions as the state (autoSuggestions)
      
    }
    this.setState({
      autoSuggestions: searchSuggestions
    })
  }

  chooseSuggestion(e) {
    this.refs.searchBox.value = e.target.innerText;
    this.setState({
      autoSuggestions: []
    });
  }

  render() {
    return (
      <div className="Search">
        <div class="search-menu-wrapper">
          <form>
            <input ref="searchBox" type="text" placeholder="Style or Taste Profile" onChange={ this.autoComplete } />
            <button onClick={this.searchBeers} >
              <img src={magnifier} alt=""/>
            </button>
          </form>
          {
            this.state.autoSuggestions.length !== 0 && (
              <ul className="suggestion-box">
                {
                  this.state.autoSuggestions.map((suggestion) => {
                    return <li className="suggestion" onClick={this.chooseSuggestion.bind(this)}>{suggestion.toLowerCase()}</li>;
                  })
                }
              </ul>
            )
          }
        </div>
      </div>
    )
  }
}

export default Search;
