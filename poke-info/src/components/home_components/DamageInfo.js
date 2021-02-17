import axios from 'axios';
import React, { useState, useEffect } from "react";


function DamageInfo(props) {
  const [damage, setDamage] = useState(undefined)

  let url = `https://pokeapi.co/api/v2/type/${props.type}`;


  const fetchDamage = async () => {
    const response = await axios.get(url);
    setDamage(response.data)
  }

  useEffect(() => {
    fetchDamage();
  }, [])






  if (damage !== undefined) {
    return (
      <div>
        <table border={1}>
          <tbody>

            <tr><td className="damage-type">
              <p>Double Damage From</p> </td>
              <td className="damage-value" > {damage.damage_relations.double_damage_from.map(damage => {

                if (damage.name === 'grass') {
                  return (
                    <div className="grass-block" key={'grass'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'poison') {
                  return (
                    <div className="poison-block" key={'poison'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fire') {
                  return (
                    <div className="fire-block" key={'fire'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'flying') {
                  return (
                    <div className="flying-block" key={'flying'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'water') {
                  return (
                    <div className="water-block" key={'water'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'bug') {
                  return (
                    <div className="bug-block" key={'bug'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'normal') {
                  return (
                    <div className="normal-block" key={'normal'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'electric') {
                  return (
                    <div className="electric-block" key={'electric'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fairy') {
                  return (
                    <div className="fairy-block" key={'fairy'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fighting') {
                  return (
                    <div className="fighting-block" key={'fighting'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'psychic') {
                  return (
                    <div className="psychic-block" key={'psychic'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'rock') {
                  return (
                    <div className="rock-block" key={'rock'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'steel') {
                  return (
                    <div className="steel-block" key={'steel'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ice') {
                  return (
                    <div className="ice-block" key={'ice'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ghost') {
                  return (
                    <div className="ghost-block" key={'ghost'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ground') {
                  return (
                    <div className="ground-block" key={'ground'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
              }
              )}
              </td> </tr>

            <tr><td className="damage-type">
              <p>Double Damage To</p></td>
              <td className="damage-value">  {damage.damage_relations.double_damage_to.map(damage => {
                if (damage.name === 'grass') {
                  return (
                    <div className="grass-block" key={'grass'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'poison') {
                  return (
                    <div className="poison-block" key={'poison'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fire') {
                  return (
                    <div className="fire-block" key={'fire'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'flying') {
                  return (
                    <div className="flying-block" key={'flying'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'water') {
                  return (
                    <div className="water-block" key={'water'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'bug') {
                  return (
                    <div className="bug-block" key={'bug'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'normal') {
                  return (
                    <div className="normal-block" key={'normal'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'electric') {
                  return (
                    <div className="electric-block" key={'electric'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fairy') {
                  return (
                    <div className="fairy-block" key={'fairy'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fighting') {
                  return (
                    <div className="fighting-block" key={'fighting'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'psychic') {
                  return (
                    <div className="psychic-block" key={'psychic'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'rock') {
                  return (
                    <div className="rock-block" key={'rock'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'steel') {
                  return (
                    <div className="steel-block" key={'steel'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ice') {
                  return (
                    <div className="ice-block" key={'ice'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ghost') {
                  return (
                    <div className="ghost-block" key={'ghost'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ground') {
                  return (
                    <div className="ground-block" key={'ground'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }

              })}
              </td> </tr>

            <tr><td className="damage-type">
              <p>Half Damage From</p></td>
              <td className="damage-value">  {damage.damage_relations.half_damage_from.map(damage => {
                if (damage.name === 'grass') {
                  return (
                    <div className="grass-block" key={'grass'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'poison') {
                  return (
                    <div className="poison-block" key={'poison'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fire') {
                  return (
                    <div className="fire-block" key={'fire'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'flying') {
                  return (
                    <div className="flying-block" key={'flying'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'water') {
                  return (
                    <div className="water-block" key={'water'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'bug') {
                  return (
                    <div className="bug-block" key={'bug'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'normal') {
                  return (
                    <div className="normal-block" key={'normal'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'electric') {
                  return (
                    <div className="electric-block" key={'electric'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fairy') {
                  return (
                    <div className="fairy-block" key={'fairy'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fighting') {
                  return (
                    <div className="fighting-block" key={'fighting'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'psychic') {
                  return (
                    <div className="psychic-block" key={'psychic'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'rock') {
                  return (
                    <div className="rock-block" key={'rock'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'steel') {
                  return (
                    <div className="steel-block" key={'steel'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ice') {
                  return (
                    <div className="ice-block" key={'ice'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ghost') {
                  return (
                    <div className="ghost-block" key={'ghost'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ground') {
                  return (
                    <div className="ground-block" key={'ground'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }

              })}
              </td> </tr>

            <tr><td className="damage-type">
              <p>Half Damage To</p></td>
              <td className="damage-value"> {damage.damage_relations.half_damage_to.map(damage => {
                if (damage.name === 'grass') {
                  return (
                    <div className="grass-block" key={'grass'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'poison') {
                  return (
                    <div className="poison-block" key={'poison'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fire') {
                  return (
                    <div className="fire-block" key={'fire'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'flying') {
                  return (
                    <div className="flying-block" key={'flying'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'water') {
                  return (
                    <div className="water-block" key={'water'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'bug') {
                  return (
                    <div className="bug-block" key={'bug'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'normal') {
                  return (
                    <div className="normal-block" key={'normal'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'electric') {
                  return (
                    <div className="electric-block" key={'electric'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fairy') {
                  return (
                    <div className="fairy-block" key={'fairy'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'fighting') {
                  return (
                    <div className="fighting-block" key={'fighting'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'psychic') {
                  return (
                    <div className="psychic-block" key={'psychic'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'rock') {
                  return (
                    <div className="rock-block" key={'rock'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'steel') {
                  return (
                    <div className="steel-block" key={'steel'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ice') {
                  return (
                    <div className="ice-block" key={'ice'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ghost') {
                  return (
                    <div className="ghost-block" key={'ghost'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }
                else if (damage.name === 'ground') {
                  return (
                    <div className="ground-block" key={'ground'}>
                      <p>{damage.name}</p>
                    </div>
                  )
                }

              })}
              </td> </tr>

          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}


export default DamageInfo;