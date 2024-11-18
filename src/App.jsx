import { useState, useEffect,useRef } from 'react'
import GetPokemonInfo from './components/PokemonCards.jsx'
import './App.css'

function App() {

  const [pokemonDeck,setPokemonDeck] = useState(['pikachu','charizard','ivysaur','squirtle','metapod','rattata','cubone','eevee','jigglypuff','haunter']);


  function randomizeDeck(){
    console.log(pokemonDeck);
   
    let newDeck=[...pokemonDeck];
    //Fisher-Yaes Shuffle Algorithm
    for(let i=newDeck.length-1;i>0;i--){
      let j=Math.floor(Math.random()*(i+1));
      [newDeck[i],newDeck[j]]=[newDeck[j],newDeck[i]];
    }
    setPokemonDeck(newDeck);
    console.log(newDeck);
  }


  return (
    <>
    <header>
    <h1>Pokemon Memory Game</h1>
    <div className="score-header">
      <h4>Game score: 0</h4>
      <h4>Best score: 0</h4>
    </div>
    </header>
    <div className="pokemonCardWrapper">
      {pokemonDeck.map(card => (
        <GetPokemonInfo key={card} name={card} clickFnc={randomizeDeck}></GetPokemonInfo>
      ))
      }
    </div>
    </>
  )
}

export default App
