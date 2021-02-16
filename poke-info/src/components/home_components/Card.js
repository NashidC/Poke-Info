import axios from 'axios';
import React, { useState, useEffect } from "react";

function Card(props) { 
  
  const [pokemonInfo, setPokemonInfo] = useState(undefined);

  console.log(props.card)

  let url = `https://pokeapi.co/api/v2/pokemon/${props.card}/`;

  const fetchPokemon = async () => {
    const response = await axios.get(url);
    setPokemonInfo(response.data)
  }

  useEffect(() => { 
    fetchPokemon();
  }, [])

  console.log(pokemonInfo)



  if (pokemonInfo !== undefined) {
    return (
      <div>
        <img src={pokemonInfo.sprites.front_default} />
        <p>Type</p>
        <div id="type">
          <p>{pokemonInfo.types[0].type.name}</p>
          <p>{pokemonInfo.types[1].type.name}</p>
        </div>
        <div id="stat">
          <p>{pokemonInfo.stats[0].stat.name}: {pokemonInfo.stats[0].base_stat}</p>
          <p>{pokemonInfo.stats[1].stat.name}: {pokemonInfo.stats[1].base_stat}</p>
          <p>{pokemonInfo.stats[2].stat.name}: {pokemonInfo.stats[2].base_stat}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Card;