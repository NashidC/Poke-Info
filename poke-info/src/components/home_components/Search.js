import axios from 'axios';
import React, { useState, useEffect } from "react";
import Evolution from './Evolution';
import HeighWeight from './HeightWeight';
import Moves from './Moves';
import Card from './Card';
import Damage from './Damage';

function Search(props) {

  const [pokemonInfo, setPokemonInfo] = useState(undefined)
  const [errorMessage, setErrorMessage] = useState("");

  let url = `https://pokeapi.co/api/v2/pokemon-species/${props.searchPokemon.toLowerCase()}/`;
  let messg;





  const fetchPokemon = async () => {
    await axios.get(url).then(response => { setPokemonInfo(response.data) }).catch(error => message(error.message))
    }

  useEffect(() => {
    fetchPokemon();
  }, [])


  function message(para) { 
    // messg = <h2>Oops Something Went Wrong. Please Type The Correct Name Of Pokémon.</h2>
    console.log(para)
    setErrorMessage("Oops Something Went Wrong. Please Type The Correct Name Of Pokémon.");
  }

  console.log(messg)

  if (pokemonInfo !== undefined) {
    return (
      <div>
        <h2>#{pokemonInfo.order} {pokemonInfo.name}</h2>
        <div>
          <div id="card">
            <Card card={pokemonInfo.name} />
          </div>

          <div>
            <div id="heighWeight">
              <HeighWeight heightWeight={pokemonInfo.name} />
            </div>
            <div id="moves">
              <h3>Moves</h3>
              <Moves name={pokemonInfo.name} />
            </div>
          </div>
        </div>
        <Evolution pokemonEvolution={pokemonInfo.evolution_chain} />
        <Damage pokeName={pokemonInfo.name} />
      </div>
    )
  } else {
    return (
      <div id="errorMessg"><h2>{errorMessage}</h2></div>
    )
  }
}
  
export default Search;