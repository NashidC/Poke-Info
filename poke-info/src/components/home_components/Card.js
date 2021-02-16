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
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Card;