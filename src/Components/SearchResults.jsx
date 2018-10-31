import React, { Component } from 'react';
import { coloradoBeer } from '../beer-data';

class SearchResults extends Component {

  render() {

    return (
      <div class="SearchResults">
        {coloradoBeer.map((beer) => {
          return (
            <div className="beer-card">
              <div className="beer-img" style={{backgroundImage: `url(${beer.image})`}}></div>
              <p>{beer.name}</p>
              <p>Brewery</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SearchResults;