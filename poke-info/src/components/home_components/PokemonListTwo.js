import PokemonList from "./Pokemon-List"
import React, { useState, useEffect } from "react";
import axios from 'axios';


function PokemonListTwo(props) { 

  const [nextList, setNextList] = useState(null);

  console.log(nextList);


  const fetchNextList= async () => {
    const res = await axios.get(props.apiDataTwo);
    setNextList(res.data);
  }

  useEffect(() => {
    fetchNextList()
  }, [])


 

  return (
    <h1>Next list</h1>
  )
}


export default PokemonListTwo;