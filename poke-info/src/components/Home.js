import CardInfo from './home_components/Card-Info';
import Search from './home_components/Search';
import getPokemons from '../services/getPokemons';
import React, { useState, useEffect } from "react";
import PokemonList from './home_components/Pokemon-List';





function Home() { 
  const [pokemonList, setPokemonList] = useState(null);


  useEffect(() => {
    const response = async () => { 
      const data = await getPokemons();
      console.log(data.results);
      setPokemonList(data.results);
    }

    response();
  }, [])


  
  return (
    <div>
      <h1>Home</h1>
      <Search />
      <PokemonList apiData={pokemonList} />
      {/* <div>{JSON.stringify(pokemonList)}</div> */}
      
    </div>
  )
}

export default Home;