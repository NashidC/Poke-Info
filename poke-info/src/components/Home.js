import CardInfo from './home_components/Card-Info';
import Search from './home_components/Search';
import getPokemons from '../services/getPokemons';
import React, { useState, useEffect } from "react";






function Home() { 
  const [pokemonList, setPokemonList] = useState([]);


  useEffect(() => {
    const response = async () => { 
      const data = await getPokemons();
      setPokemonList(data);
    }

    response();
  }, [])


  
  return (
    <div>
      <h1>Home</h1>
      <Search />
      <>
      {/* <div>{JSON.stringify(pokemonList)}</div> */}
      
    </div>
  )
}

export default Home;