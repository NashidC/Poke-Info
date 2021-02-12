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

  function showPrevList() {
    if (next <= 20) {
      setNext(0)
      setNextPokemonList(false);
    } else { 
      setNext(next - 20)
    }
  }

 


  let list;
  let buttonTwo;
 
    if (pokemons !== null && nextPokemonList === false) {
      list = <PokemonList apiData={pokemons} />
    }
    
    else if (pokemons !== null && nextPokemonList === true) {
      list = <PokemonListTwo apiDataTwo={`https://pokeapi.co/api/v2/pokemon-species/?offset=${next}&limit=20`} />

      buttonTwo =  <button onClick={showPrevList}>Prev</button>
      
      console.log(next);
    }
    
    else {
      list = <h2>There is no data</h2>
    }







    return (
      <div>
        {buttonTwo}
        <button onClick={showNextList}>Next</button>
        {list}
      </div>
    )
    
}


export default PokemonSummary;