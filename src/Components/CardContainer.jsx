import React, { Component } from 'react';

import '../Styles/CardContainer.css';
import SearchCard from './SearchCard.jsx';

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      viewState: 1
    }
  }

  showResults() {
    return (
      <SearchCard
        // beerImg={}
        // beerName={}
        // brewery={}
      />
    )
  }

  showProfile() {
    return (
      <SearchCard 
        // beerImg={}
        // beerName={} 
        // brewery={} 
        // beerStyle={} 
        // abv={} 
        // tastingNotes={}
      />
    )
  }

  render() {
    let display = '';

    if (this.state.viewState === 1) {
      display = this.showResults()
    } else if (this.state.viewState === 2) {
      display = this.showProfile()
    };

    return (
      <div className="card-container">
        {display}
      </div>
    )
  }
}

export default CardContainer;