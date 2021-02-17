import axios from 'axios';
import React, { useState, useEffect } from "react";

function Card(props) {

  const [pokemonInfo, setPokemonInfo] = useState(undefined);


  let url = `https://pokeapi.co/api/v2/pokemon/${props.card}/`;

  const fetchPokemon = async () => {
    const response = await axios.get(url);
    setPokemonInfo(response.data)
  }

  useEffect(() => {
    fetchPokemon();
  }, [])



  if (pokemonInfo !== undefined) {
    return (
      <div>
        <img src={pokemonInfo.sprites.front_default} />

        <div id="type">
          <table border={1}>
            <tr>
              <td className="stat-name">Type</td>

              <td className="value">{pokemonInfo.types.map(type => {
                if (type.type.name === 'grass') {
                  return (
                    <div className="grass-block" key={'grass'}>
                      <p className="type-text" key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'poison') {
                  return (
                    <div className="poison-block" key={'poison'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'fire') {
                  return (
                    <div className="fire-block" key={'fire'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'flying') {
                  return (
                    <div className="flying-block" key={'flying'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'water') {
                  return (
                    <div className="water-block" key={'water'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'bug') {
                  return (
                    <div className="bug-block" key={'bug'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'normal') {
                  return (
                    <div className="normal-block" key={'normal'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'electric') {
                  return (
                    <div className="electric-block" key={'electric'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'fairy') {
                  return (
                    <div className="fairy-block" key={'fairy'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'fighting') {
                  return (
                    <div className="fighting-block" key={'fighting'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'psychic') {
                  return (
                    <div className="psychic-block" key={'psychic'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'rock') {
                  return (
                    <div className="rock-block" key={'rock'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'steel') {
                  return (
                    <div className="steel-block" key={'steel'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'ice') {
                  return (
                    <div className="ice-block" key={'ice'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'ghost') {
                  return (
                    <div className="ghost-block" key={'ghost'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
                else if (type.type.name === 'ground') {
                  return (
                    <div className="ground-block" key={'ground'}>
                      <p key={type.type.name}>{type.type.name}<br /></p>
                    </div>
                  )
                }
              })}
              </td>
            </tr>
          </table>
        </div>

        <div id="stat">
          <table border={1}>
            <tbody>

              <tr><td className='stat-name'>{pokemonInfo.stats[0].stat.name}:</td> <td className='value'>{pokemonInfo.stats[0].base_stat}</td></tr>
              <tr><td className='stat-name'>{pokemonInfo.stats[1].stat.name}:</td> <td className='value'> {pokemonInfo.stats[1].base_stat}</td></tr>
              <tr><td className='stat-name'>{pokemonInfo.stats[2].stat.name}:</td> <td className='value'> {pokemonInfo.stats[2].base_stat}</td></tr>
              <tr><td className='stat-name'>{pokemonInfo.stats[3].stat.name}:</td> <td className='value'> {pokemonInfo.stats[3].base_stat}</td></tr>
              <tr><td className='stat-name' >{pokemonInfo.stats[4].stat.name}:</td> <td className='value'> {pokemonInfo.stats[4].base_stat}</td></tr>
              <tr><td className='stat-name'>{pokemonInfo.stats[5].stat.name}: </td> <td className='value'>{pokemonInfo.stats[5].base_stat}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Card;