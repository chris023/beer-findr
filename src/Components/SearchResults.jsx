import React, { Component } from 'react';
import '../Styles/SearchResults.scss';

class SearchResults extends Component {

  render() {
    return (

      <div class="SearchResults">
        {this.props.results.map((beer) => {
          let brewery = this.props.breweries.find((brewery) => {
            return beer.breweryID === brewery.breweryID
          })
          return (
            <div className="beer-card" data={beer.name} key={beer.name} onClick={this.props.changeView} >
              <div className="beer-img" style={{ backgroundImage: `url(${beer.image})` }}></div>
              <p>{beer.name}</p>
              <p>{brewery.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SearchResults;