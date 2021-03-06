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
  const [search, setSearch] = useState(false);
  const [term, setTerm] = useState("")

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


  function goToCardInfo(e) {
    setPokemonName(e.target.id);
    setCardInfo(true);
  }

  function back() {
    setCardInfo(false);
    setTerm("");
  }

  function home() {
    window.location.reload();
  }



  function lookForPokemon() {
    setSearch(true);
    setCardInfo(true);
  }



  let list;
  let button;
  let buttonTwo;

  if (pokemons !== null && nextPokemonList === false) {
    button = <button className="navButton" onClick={showNextList}>Next</button>
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
      button = <button className="navButton" id="next" onClick={showNextList}>Next</button>
    }
    buttonTwo = <button className="navButton" id="prev" onClick={showPrevList}>Prev</button>
  }
  else {
    list = <h2>There is no data</h2>
  }


  if (!cardInfo) {
    return (
      <div>
        <div className="flex-two">
          <input
            type="Search"
            placeholder="Search"
            value={term}
            onChange={e => setTerm(e.target.value)}
            id="search"
          />
          <button onClick={lookForPokemon} id="searchButton"><i className="fa fa-search"></i></button>
        </div>
        {buttonTwo}
        {button}
        {list}
      </div>
    )
  } else if (search === true && cardInfo) {
    return (
      <div>
        <button className="navButton" onClick={() => home()}>Back</button>
        <Search searchPokemon={term} />
      </div>
    )
  } else {
    return (
      <div>
        <button className="navButton" onClick={() => back()}>Back</button>
        <CardInfo pokemonName={pokemonName} />
      </div>
    )
  }

}


export default PokemonSummary;