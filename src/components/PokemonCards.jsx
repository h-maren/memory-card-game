import {useState, useEffect} from 'react'

export default function GetPokemonInfo({name}){
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
    let pokemonImage=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+pokemon.id+`.png`;          

    if(!isLoading){
    return(
        <div className='pokemonCard'>
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.id}</h3>
            <img src={pokemonImage} />
            <h3>{pokemon.types[0].type.name}</h3>
        </div>
    )
    }
}
