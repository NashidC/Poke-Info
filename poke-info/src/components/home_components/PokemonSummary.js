import Image from './Image';
import Search from './Search';
import CardInfo from './Card-Info';
import React, { useState, useEffect } from "react";
import axios from 'axios';



function PokemonSummary(props) { 

  const pokemons = props.data;

  const [next, setNext] = useState(0)
  const [nextPokemonList, setNextPokemonList] = useState(false);
  const [nextList, setNextList] = useState(null);

  let url = `https://pokeapi.co/api/v2/pokemon-species/?offset=${next}&limit=20`;


  const fetchNextList= async () => {
    const res = await axios.get(url);
    setNextList(res.data);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (next) {
        fetchNextList();
      }
    }, 300)
    //return will allow the cleanup
    return () => {
      clearTimeout(timeoutId);
    }
  }, [next]);
  
  
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
  let button;
  let buttonTwo;
  
  if (pokemons !== null && nextPokemonList === false) {
      button = <button onClick={showNextList}>Next</button>
      const pokemonsList = pokemons.results

    list = <ul>{pokemonsList.map((pokemon, id) => { 
      return (
        <li onClick={(e) => console.log(e)} key={pokemon.name}><Image imageName={pokemon.name} />{pokemon.name}</li>
      )
    })}</ul>
  }  
  else if (nextList !== null && nextPokemonList === true) {
    const pokemonNextList = nextList.results

    list = <ul>{pokemonNextList.map(pokemon => { 
      return (
        <li onClick={(e) => console.log(e)} key={pokemon.name}><Image imageName={pokemon.name} />{pokemon.name}</li>
      )
    })}</ul>
    

      if (next < 880) {
        button = <button onClick={showNextList}>Next</button>
      }
      buttonTwo =  <button onClick={showPrevList}>Prev</button>
  }
  else {
      list = <h2>There is no data</h2>
  }


    return (
      <div>
        <Search />
        {buttonTwo}
        {button}
        {list}
      </div>
    )
    
}


export default PokemonSummary;