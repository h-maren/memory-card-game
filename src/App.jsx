import { useState, useEffect,useRef } from 'react'
import GetPokemonInfo from './components/PokemonCards.jsx'
import RandomizeDeck from './components/RandomizeDeck.jsx'
import './App.css'

function App() {

  const [pokemonDeck,setPokemonDeck] = useState(['pikachu','charizard','ivysaur','squirtle','metapod','rattata','cubone','eevee','jigglypuff','haunter']);
  const [pokemonSelected,setPokemonSelected] = useState([]);
  const [currentScore,setCurrentScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);

  
  function playRound(e){
    let cardSelected=e.target.parentElement.dataset.index;
    if(!pokemonSelected.includes(cardSelected)){
      //if pokemon hasn't been selected yet, add current score
      setCurrentScore(currentScore=> currentScore+1);
      setPokemonSelected([cardSelected, ...pokemonSelected]);
    }
    else {
      //replace bestScore if currentScore is greater, than reset game
      if(currentScore>bestScore){
        setBestScore(currentScore)
      }
      setCurrentScore(0);
      setPokemonSelected([]);
    }
    //then shuffle the deck

    let newDeck=RandomizeDeck(pokemonDeck);
    setPokemonDeck(newDeck);
  }

  return (
    <>
    <header>
    <div className="game-title">
    <h1>Pokemon Memory Game</h1>
    <h2>Gotta catch em all! But only once!</h2>
    </div>
    <div className="score-header">
      <h4>Game score: {currentScore}</h4>
      <h4>Best score: {bestScore}</h4>
    </div>
    </header>
    <div className="pokemonCardWrapper">
      {pokemonDeck.map(card => (
        <GetPokemonInfo key={card} name={card} clickFnc={playRound}></GetPokemonInfo>
      ))
      }
    </div>
    </>
  )
}

export default App
