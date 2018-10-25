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
          <div className="beer-card" key={beer.name}>
            <img className="beer-img" src={beer.image} alt={beer.name}/>
            <p>{beer.name}</p>
            <p>{brewery.name}</p>
          </div>
        )
      })
    )
  }
}

export default SearchResults;