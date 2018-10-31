import React, { Component } from 'react';
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
        changeView={this.props.changeView}
      />
    )
  }

  showProfile() {
    return (
      <div className="card-container">
        <BeerProfile
          changeView={this.props.changeView}
          beerName={this.props.beerName}
          results={this.props.results}
          breweries={this.props.breweries} 
        />
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