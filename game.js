import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const Game = props => {

  function addgame (){
    props.onClick({
      title: props.url.title,
      link: props.url.link,
      releaseDate: props.url.releaseDate,
      OriginalPrice: props.url.OriginalPrice,
      ratings: props.url.ratings
    });
  }

  return (
    <div>
      <img height="300" width="500" src={props.url.image} />
      <p>{props.url.title}</p>
      <p>{props.url.link}</p>
      <p>{props.url.releaseDate}</p>
      <p>{props.url.OriginalPrice}</p>
      <p>{props.url.ratings}</p>
      <Button
        varaint="fab"
        color="secondary"
        aria-label="Add"
        className="fv-btn"
        onClick = {addgame}
      >
        <AddIcon />
      </Button>
      
     ` {/* <Button
        varaint="fab"
        color="secondary"
        aria-label="Add"
        className="fv-btn"
      >
        <DeleteIcon />
      </Button>` */}
    </div>
  );
};

export default Game;
