import { useState, useEffect } from 'react'
import GetPokemonInfo from './components/PokemonCards.jsx'
import './App.css'

function App() {

  return (
    <>
      <div>
      <GetPokemonInfo name={'pikachu'}></GetPokemonInfo>
      </div>
    </>
  )
}

export default App
