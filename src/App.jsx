import { useState, useEffect,useRef } from 'react'
import GetPokemonInfo from './components/PokemonCards.jsx'
import RandomizeDeck from './components/RandomizeDeck.jsx'
import './App.css'

function App() {

  const [pokemonDeck,setPokemonDeck] = useState(['pikachu','charizard','ivysaur','squirtle','metapod','rattata','cubone','eevee','jigglypuff','haunter']);

  
  function randomizePokeDeck(){
    let newDeck=RandomizeDeck(pokemonDeck);
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
        <GetPokemonInfo key={card} name={card} clickFnc={randomizePokeDeck}></GetPokemonInfo>
      ))
      }
    </div>
    </>
  )
}

export default App
