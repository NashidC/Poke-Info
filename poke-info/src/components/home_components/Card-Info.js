import axios from 'axios';
import React, { useState, useEffect } from "react";
import Evolution from './Evolution'
import Moves from './Moves'

function CardInfo(props) {
  
  const [pokemon, setPokemon] = useState(undefined);

  let pokemonName = props.pokemonName

  let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;

  const fetchPokemon = async () => {
    const response = await axios.get(url);
    setPokemon(response.data)
  }

  useEffect(() => { 
    fetchPokemon();
  },[])




  if (pokemon !== undefined) {
    return (
      <div>
        <h2>#{pokemon.order} {pokemon.name}</h2>
        <div>

          <div>
            <h3>Moves</h3>
            <Moves name={pokemonName} />
          </div>
        </div>
        <Evolution pokemonEvolution={pokemon.evolution_chain} />
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}


export default CardInfo;