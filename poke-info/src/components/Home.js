import getPokemons from '../services/getPokemons';
import React, { useState, useEffect } from "react";
import PokemonSummary from './home_components/PokemonSummary';



function Home() { 
  const [pokemonList, setPokemonList] = useState(null);
  

  useEffect(() => {
    const response = async () => { 
      const data = await getPokemons();
      setPokemonList(data);
    }

    response();
    
  }, [])


  
  return (
    <div>
      <PokemonSummary data={pokemonList} />      
    </div>
  )
}

export default Home;