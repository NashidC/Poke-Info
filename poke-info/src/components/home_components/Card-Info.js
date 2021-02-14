import axios from 'axios';
import React, { useState, useEffect } from "react";


function CardInfo(props) {
  
  const [pokemon, setPokemon] = useState('');

  console.log(props.pokemonName);
  let pokemonName = props.pokemonName

  let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;

  const fetchPokemon = async () => {
    const response = await axios.get(url);
    setPokemon(response.data)
  }

  useEffect(() => { 
    fetchPokemon();
  },[])

  console.log(pokemon)

  return (
    <div>
      <h2>Card Info</h2>

    </div>
  )
}


export default CardInfo;