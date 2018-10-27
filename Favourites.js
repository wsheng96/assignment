import React, { Component } from 'react';
import gameList from './gameList';
import axios from 'axios';

class Favourite extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }

  deleteFromFavourite = movie => {
    console.log('Delete from favourite - ', game.game);
    axios
    .post('http://localhost:5000/deletefavourite', {
      game: JSON.stringify(game.game)
    })
    .then(function (response) {
      alert('Deleted From Favourite');
      console.log('Successfully delete favourites');
      window.location.reload();
    })
    .catch(function(error) {
      console.log('Failed to delete favourite');
    });
  };

  getFavourites() {
    axios
    .get('http://localhost:5000/getfavourite')
    .then(response => {
      console.log('Get game from server', response);
      this.setState({ games: response.data }, function() {
        console.log(this.state);
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  componentDidMount() {
    this.getFavourites();
   }

   render() {
     return (
      <div className="container-fluid" style={{ marginleft: '-15px'}}>
        <div className="d-flex flex row">
          <div className="col-sm-12">
            <gameList
            movies = {this.state.games}
            favourite = {true}
            buttonFunc = {this.deleteFromFavourite}
            />
          </div>
        </div>
      </div>
     )
   }
  }