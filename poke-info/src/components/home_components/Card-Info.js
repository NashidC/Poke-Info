import axios from 'axios';
import React, { useState, useEffect } from "react";
import Evolution from './Evolution';
import HeighWeight from './HeightWeight';
import Moves from './Moves';
import Card from './Card';
import Damage from './Damage';

function CardInfo(props) {

  console.log(props);

  const [pokemon, setPokemon] = useState(undefined);
  let pokemonName = props.pokemonName
  let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;
  const fetchPokemon = async () => {
    const response = await axios.get(url);
    setPokemon(response.data)
  }
  useEffect(() => {
    fetchPokemon();
  }, [])
  if (pokemon !== undefined) {
    return (
      <div>
        <h2>#{pokemon.order} {pokemon.name}</h2>
        <div>
          <div id="card">
            <HeighWeight heightWeight={pokemon.name} />
            <Card card={pokemon.name} />
          </div>
          <div>
            {/* <div id="heighWeight">
              
            </div> */}
            <div id="moves">
              <h3>Moves</h3>
              <Moves name={pokemonName} />
            </div>
          </div>
        </div>
        <Evolution pokemonEvolution={pokemon.evolution_chain} />
        <Damage pokeName={pokemonName} />
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}
export default CardInfo;