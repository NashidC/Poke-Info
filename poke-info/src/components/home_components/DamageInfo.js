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
        <div>
          <p>Double Damage From</p>
          {damage.damage_relations.double_damage_from.map(damage => {
          return (
            <p>{damage.name}</p>
          )
          })}
        </div>
        <div>
          <p>Double Damage To</p>
          {damage.damage_relations.double_damage_to.map(damage => {
          return (
            <p>{damage.name}</p>
          )
          })}
        </div>
        <div>
          <p>Half Damage From</p>
          {damage.damage_relations.half_damage_from.map(damage => {
          return (
            <p>{damage.name}</p>
          )
          })}
        </div>
        <div>
          <p>Half Damage To</p>
          {damage.damage_relations.half_damage_to.map(damage => {
          return (
            <p>{damage.name}</p>
          )
          })}
        </div>

      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}


export default DamageInfo;