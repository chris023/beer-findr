import React, { Component } from 'react';

import '../Styles/CardContainer.css';
import SearchCard from './SearchCard.jsx'

class CardContainer extends Component {

  render() {
    return (
      <div className="card-container">
        <SearchCard />
      </div>
    )
  }
}

export default CardContainer;