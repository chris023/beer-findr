import React, { Component } from 'react';
import '../Styles/BeerProfile.scss';

class BeerProfile extends Component {

  render() {
      let profile = this.props.results.find((beer) => {
        return beer.name === this.props.beerName
      });

      let brewery = this.props.breweries.find((brewery) => {
        return brewery.breweryID === profile.breweryID
      })

      return (
          <div onClick={this.props.changeView} className="beer-profile">
            <img className="beer-img" src={profile.image} alt={profile.name} />
            <p>{profile.name}</p>
            <p>{brewery.name}</p>
            <p>{profile.abv}</p>
            <p>{profile.styles}</p>
            <p>{profile.tastingNotes}</p> 
          </div>
        )
  }
}

export default BeerProfile;