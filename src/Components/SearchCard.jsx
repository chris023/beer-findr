import React, { Component } from 'react';

import '../Styles/SearchCard.css';

class SearchCard extends Component {

  render() {
    return (
      <div className="beer-card">
        <img src="https://cdn.pastemagazine.com/www/articles/assets_c/2015/06/avery_fortuna_web%20(Custom)-thumb-220x328-157545.jpg" />
        <p>Beer Name</p>
        <p>Brewery</p>
      </div>
    )
  }
}

export default SearchCard;