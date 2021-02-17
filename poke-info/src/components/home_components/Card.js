import axios from 'axios';
import React, { useState, useEffect } from "react";

function Card(props) { 
  
  const [pokemonInfo, setPokemonInfo] = useState(undefined);


  let url = `https://pokeapi.co/api/v2/pokemon/${props.card}/`;

  const fetchPokemon = async () => {
    const response = await axios.get(url);
    setPokemonInfo(response.data)
  }

  useEffect(() => { 
    fetchPokemon();
  }, [])

  

  if (pokemonInfo !== undefined) {
    return (
      <div>
        <img src={pokemonInfo.sprites.front_default} />
        <p>Type</p>
        <div id="type">
          {pokemonInfo.types.map(type => { 
            return (
              <p key={type.type.name}>{type.type.name}</p>
            )
          })}
        </div>  

        <div id="stat">
          <p>{pokemonInfo.stats[0].stat.name}: {pokemonInfo.stats[0].base_stat}</p>
          <p>{pokemonInfo.stats[1].stat.name}: {pokemonInfo.stats[1].base_stat}</p>
          <p>{pokemonInfo.stats[2].stat.name}: {pokemonInfo.stats[2].base_stat}</p>
          <p>{pokemonInfo.stats[3].stat.name}: {pokemonInfo.stats[3].base_stat}</p>
          <p>{pokemonInfo.stats[4].stat.name}: {pokemonInfo.stats[4].base_stat}</p>
          <p>{pokemonInfo.stats[5].stat.name}: {pokemonInfo.stats[5].base_stat}</p>
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