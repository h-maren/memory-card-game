import { useState, useEffect } from 'react'
import GetPokemonInfo from './components/PokemonCards.jsx'
import './App.css'

function App() {

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
      <div>
      <GetPokemonInfo name={'pikachu'}></GetPokemonInfo>
      </div>
      <div>
      <GetPokemonInfo name={'charizard'}></GetPokemonInfo>
      </div>
      <div>
      <GetPokemonInfo name={'ivysaur'}></GetPokemonInfo>
      </div>
      <div>
      <GetPokemonInfo name={'squirtle'}></GetPokemonInfo>
      </div>
      <div>
      <GetPokemonInfo name={'metapod'}></GetPokemonInfo>
      </div>
      <div>
      <GetPokemonInfo name={'rattata'}></GetPokemonInfo>
      </div>
    </div>
    </>
  )
}

export default App
