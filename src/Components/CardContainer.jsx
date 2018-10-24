import React, { Component, Fragment } from 'react';

import '../Styles/CardContainer.css';
import SearchResults from './SearchResults.jsx';
import BeerProfile from './BeerProfile.jsx';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    }
  }

  showResults() {
    return (
      <SearchResults
        results= {this.props.results}
        // beerImg={}
        // beerName={}
        // brewery={}
      />
    )
  }

  showProfile() {
    return (
      <div className="card-container">
        <BeerProfile 
        // beerImg={}
        // beerName={} 
        // brewery={} 
        // beerStyle={} 
        // abv={} 
        // tastingNotes={}
        />
      </div>
      
    )
  }

  render() {
    let display = '';

    if (this.props.view === 1) {
      display = (
        <div className="card-container">
          {this.showResults()}
        </div>
      )

    } else if (this.props.view === 2) {
      display = this.showProfile()
    };

    return display
      
  }
}

export default CardContainer;