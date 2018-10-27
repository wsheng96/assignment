import React, { Component } from 'react';
import Game from './game';



const Home = props =>{
  const games = props.item;
  let res;

  if(games.length>0){
    res = games.map((res) => <Game url={res} onClick={props.onClick}/>);
  }

  return(
    <div>
      {res}
    </div>
  );
};

export default Home;