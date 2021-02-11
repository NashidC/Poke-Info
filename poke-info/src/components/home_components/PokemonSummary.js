import PokemonList from './Pokemon-List';
import PokemonListTwo from './PokemonListTwo'
import React, { useState, useEffect } from "react";




function PokemonSummary(props) { 

  const pokemons = props.data;

  const [next, setNext] = useState(0)
  const [nextPokemonList, setNextPokemonList] = useState(false);
  
  
  function showNextList() { 
    setNextPokemonList(true);
    setNext(next + 20);
  }

  console.log(next);

  
  let list;

 
    if (pokemons !== null && nextPokemonList === false) {
      list = <PokemonList apiData={pokemons} />
    } else if (pokemons !== null && nextPokemonList === true) {
      list = <PokemonListTwo apiDataTwo={`https://pokeapi.co/api/v2/pokemon-species/?offset=${next}&limit=20`} />
    } else {
      list = <h2>There is no data</h2>
    }



  



    return (
      <div>
        <button onClick={showNextList}>Next</button>
        {list}
      </div>
    )
    
}


export default PokemonSummary;