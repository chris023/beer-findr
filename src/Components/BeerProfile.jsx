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
          <div onClick={this.props.changeView} className="BeerProfile">
            <img className="profile-img" src={profile.image} alt={profile.name} />
            <div className="profile-content">
              <p className="profile-name">{profile.name}</p>
              <p className="profile-brewery">{brewery.name}</p>
              <p className="profile-abv">abv: {profile.abv}%</p>
              <p>
                {profile.style.map((style) => {
                  return (
                    <p className="profile-style">{style}</p>
                  )
                })}
              </p>
            </div>
            <div>
            <p>Tasting Notes:</p>
            <ul>
              {profile.tastingNotes.map((note) => {
                return (
                  <li className="profile-notes">{note}</li>  
                )
              })}
            </ul>
            </div>
          </div>
        )
  }
}

export default BeerProfile;