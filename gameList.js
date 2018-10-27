import React from 'react';
import Game from './game';

const gameList = props => {
  const result = props.url;

  let games;

  games = result.map(game => <Game url={game}
    onClick = {props.onClick}/>);

  return <div>{games}</div>;
};

export default gameList;
