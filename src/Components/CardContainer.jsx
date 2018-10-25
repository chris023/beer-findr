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
        results={this.props.results}
        breweries={this.props.breweries}
      />
    )
  }

  showProfile() {
    return (
      <div className="card-container">
        <BeerProfile />
      </div>
      
    )
  }

  render() {
    let display = null;

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