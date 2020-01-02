import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    let artist = {name: '', followers: {total: ''}, images: [{url: ''}]};
    artist = this.props.artist !== null ? artist = this.props.artist : artist;

    return (
      <div className = 'profile'>
        <img
          alt = 'Profile'
          className = 'profileImg'
          src = {artist.images[0].url}
        />
        <div className = 'profileInfo'>
          <div className = 'profileName'>{artist.name}</div>
          <div className = 'profileFollowers'>
            {artist.followers.total} follower(s)
          </div>
          <div className = 'profileGenres'>
            {
              artist.genres && artist.genres.map((genre, index) => {
                genre = genre !== artist.genres[artist.genres.length-1]
                              ? ` ${genre},`
                              : ` ${genre}`;
                return (
                  <span key = {index}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
