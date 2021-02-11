import React, { useState, useEffect } from "react";
import axios from "axios";





function Image(props) {
  

const [pokemonName, setPokemonName] = useState([]);

// console.log(props.imageName)

const getPokemonByName = async () => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.imageName}`);

  console.log(response.data.sprites.front_default);
  setPokemonName(response.data.sprites.front_default);
}



useEffect(() => {
  getPokemonByName()
}, [])
  

  
  
  return (
    <img src={pokemonName} />

  )


}
 

export default Image;




