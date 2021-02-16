import React, { useState, useEffect } from "react";
import axios from "axios";





function Image(props) {
  

const [pokemonName, setPokemonName] = useState([]);



const getPokemonByName = async () => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.imageName}`);
  setPokemonName(response.data.sprites.front_default);
}

useEffect(() => {
  getPokemonByName()
}, [])
  
  
  return (
    <img id={props.imageName} src={pokemonName} />

  )

}
 

export default Image;




