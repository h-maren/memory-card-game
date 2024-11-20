import {useState, useEffect} from 'react'
import '../styles/PokemonCards.css'

export default function GetPokemonInfo({name,clickFnc}){
    let [pokemon,setPokemon] = useState([]);
    let [isLoading,setLoading] = useState(true);

    let url=`https://pokeapi.co/api/v2/pokemon/`+name;
    useEffect(() => {
        fetch(url,{mode:'cors'})
        .then(response => response.json())
        .then((data)=> {
            setPokemon(data);
            setLoading(false);
        });
    },)
    //let pokemonImage=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+pokemon.id+`.png`;          
    let pokemonImage = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/0`+pokemon.id+`.png`;

    if(pokemon.id<10){
        pokemonImage= `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/00`+pokemon.id+`.png`;
    }

    if(pokemon.id>=100){
        pokemonImage= `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/`+pokemon.id+`.png`;
    }
    if(!isLoading){
    return(
        
        <div className='pokemonCard' data-index={name} onClick={clickFnc}>
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img src={pokemonImage} />
            <h3>{pokemon.types[0].type.name}</h3>
        </div>
    )
    }
}
