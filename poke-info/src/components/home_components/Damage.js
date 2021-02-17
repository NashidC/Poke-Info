import axios from 'axios';
import React, { useState, useEffect } from "react";
import DamageInfo from "./DamageInfo";


function Damage(props) { 
  const [pokemon, setPokemon] = useState(undefined)

  let url = `https://pokeapi.co/api/v2/pokemon/${props.pokeName}/`

  const fetchPokemon = async () => {
    const response = await axios.get(url);
    setPokemon(response.data)
  }

  useEffect(() => { 
    fetchPokemon();
  }, [])

  console.log(pokemon)
  
  
  if (pokemon !== undefined) {
    return (
      <div>
        <h3>Damage Relations</h3>
        {pokemon.types.map(type => { 
            return (
              <div key={type.type.name}>
                <h4>{type.type.name}</h4>
                <DamageInfo type={type.type.name} />
              </div>
            )
          })}
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Damage;