import React, { Component } from 'react';

import '../Styles/SearchResults.css';


class SearchResults extends Component {

  render() {
    return (
      this.props.results.map((beer) => {
        let brewery = this.props.breweries.find((brewery) => {
          return beer.breweryID === brewery.breweryID
        })
        return (
          <div className="beer-card" data={beer.name} key={beer.name} onClick={this.props.changeView} >
            <img className="beer-img" src={beer.image} alt={beer.name} />
            <p>{beer.name}</p>
            <p>{brewery.name}</p>
          </div>
        )
      })
    )
  }
}

export default SearchResults;