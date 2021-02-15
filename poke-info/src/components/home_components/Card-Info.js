import axios from 'axios';
import React, { useState, useEffect } from "react";
import Evolution from './Evolution'


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
        <h2>Card Info</h2>

      
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