import PokemonList from "./Pokemon-List"
import React, { useState, useEffect } from "react";
import axios from 'axios';


function PokemonListTwo(props) { 

  const [nextList, setNextList] = useState(null);

  console.log(nextList);
  let list = props.apiDataTwo

  const fetchNextList= async () => {
    const res = await axios.get(list);
    setNextList(res.data);
  }

  useEffect(() => {
    fetchNextList();
  }, [list])


 

  return (
    <h1>Next list</h1>
  )
}


export default PokemonListTwo;