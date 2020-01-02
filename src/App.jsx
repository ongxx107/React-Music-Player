import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      childVisible: false,
      tracks: []
    }
  }

  search() {
    this.setState(prevState =>
      prevState.childVisible === false ? ({ childVisible: true }) : null
    );

    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = BASE_URL + 'q=' + this.state.query
                      + '&type=artist&limit=1';
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

    let accessToken = 'PASTE_YOUR_TOKEN_HERE';

    let optionObj = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, optionObj)
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({artist});

      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
      fetch(FETCH_URL, optionObj)
      .then(response => response.json())
      .then(json => {

        // let tracks = json.tracks;
        const { tracks } = json;
        this.setState({tracks});
      })
    });

  }

  render() {
    return (
      <div className = 'App'>
        <div className = 'AppTitle'>Music Player</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type = 'text'
              placeholder = 'Search for artist'
              value = {this.state.query}
              onChange = { event => {this.setState({query: event.target.value})} }
              onKeyPress = { event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              } }
            />
            <InputGroup.Append onClick = { () => this.search() }>
              <button> <FaSearch /> </button>
            </InputGroup.Append>

          </InputGroup>
        </FormGroup>
        {
          this.state.childVisible
            ?
            <div>
              <Profile
                artist = {this.state.artist}
              />
              <Gallery
                tracks = {this.state.tracks}
              />
            </div>
            : <div></div>
        }
      </div>
    )
  }
}

export default App;
