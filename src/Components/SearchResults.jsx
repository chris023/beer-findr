import React, { Component } from 'react';
import { coloradoBeer } from '../beer-data';

class SearchResults extends Component {

  render() {

    return (
      coloradoBeer.map((beer) => {
        return (
          <div className="beer-card">
            <img className="beer-img" src={beer.image} />
            <p>{beer.name}</p>
            <p>Brewery</p>
          </div>
        )
      })
    )
  }
}

export default SearchResults;