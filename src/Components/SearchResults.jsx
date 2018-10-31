import React, { Component } from 'react';

class SearchResults extends Component {

  render() {
    return (

      <div className="SearchResults">
        {this.props.results.map((beer) => {
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
        })}
      </div>
    )
  }
}

export default SearchResults;