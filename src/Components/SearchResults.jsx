import React, { Component } from 'react';
import '../Styles/SearchResults.scss';

class SearchResults extends Component {

  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop = () => {
    this.refs.searchResultsAnchor.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <React.Fragment>
        <div class="SearchResults">
          <div ref="searchResultsAnchor" style={{ position: 'absolute', top: -200, left: 0 }} />
          {this.props.results.map((beer) => {
            let brewery = this.props.breweries.find((brewery) => {
              return beer.breweryID === brewery.breweryID
            })
            return (
              <div className="beer-card" data={beer.name} key={beer.name} onClick={this.props.changeView} >
                <p className="beer-name">{beer.name}</p>
                <div className="beer-img" style={{ backgroundImage: `url(${beer.image})` }}></div>
                <p className="brewery">{brewery.name}</p>
              </div>
            )
          })}
        </div>
        <div class="center-me">
          <button className="back-to-top" onClick={this.scrollToTop}>Back To Top</button>
        </div>
      </React.Fragment>
    )
  }
}

export default SearchResults;