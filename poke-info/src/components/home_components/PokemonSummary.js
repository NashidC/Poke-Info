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
  const [cardInfo, setCardInfo] = useState(false);
  const [pokemonName, setPokemonName] = useState("");

  let url = `https://pokeapi.co/api/v2/pokemon-species/?offset=${next}&limit=20`;


  const fetchNextList = async () => {
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
<<<<<<< HEAD


  function showNextList() {
=======
  

  function showNextList() { 
>>>>>>> 2e26348a2d495b8195bc7079e26b63996204ce3d
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


  function goToCardInfo(e) {
    setPokemonName(e.target.id);
    setCardInfo(true);
  }

  function back() {
    setCardInfo(false);
  }

  let list;
  let button;
  let buttonTwo;

  if (pokemons !== null && nextPokemonList === false) {
    button = <button onClick={showNextList}>Next</button>
    const pokemonsList = pokemons.results

    list = <div className="grid-container">{pokemonsList.map((pokemon) => {
      return (
        <div className="Card">
          <div className="Card_name">
            <p onClick={(e) => goToCardInfo(e)} key={pokemon.name} id={pokemon.name}><Image imageName={pokemon.name} /> <br />{pokemon.name}</p>
          </div>
        </div>
      )
    })}</div>
  }
  else if (nextList !== null && nextPokemonList === true) {
    const pokemonNextList = nextList.results

    list = <div className="grid-container">{pokemonNextList.map(pokemon => {
      return (
        <div className="Card">
          <div className="Card_name">
            <p onClick={(e) => goToCardInfo(e)} key={pokemon.name} id={pokemon.name}><Image imageName={pokemon.name} /> <br />{pokemon.name}</p>
          </div>
        </div>
      )
    })}</div>


    if (next < 880) {
      button = <button onClick={showNextList}>Next</button>
    }
    buttonTwo = <button onClick={showPrevList}>Prev</button>
  }
  else {
    list = <h2>There is no data</h2>
  }


  if (!cardInfo) {
    return (
      <div>
        <Search />
        {buttonTwo}
        {button}
<<<<<<< HEAD

        {list}

=======
        {list}  
>>>>>>> 2e26348a2d495b8195bc7079e26b63996204ce3d
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={() => back()}>Back</button>
        <CardInfo pokemonName={pokemonName} />
      </div>
    )
  }

}


export default PokemonSummary;