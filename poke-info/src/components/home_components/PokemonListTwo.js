import React, { useState, useEffect } from "react";
import axios from 'axios';
import NextList from './NextList';

function PokemonListTwo(props) {

  const [nextList, setNextList] = useState(null);


  let list = props.apiDataTwo

  const fetchNextList = async () => {
    const res = await axios.get(list);
    setNextList(res.data);
  }

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      if (list) {
        fetchNextList();
      }
    }, 200)
    //return will allow the cleanup
    return () => {
      clearTimeout(timeoutId);
    }


  }, [list])





  if (nextList !== null) {
    return (
      <div>
        <NextList nextPokemons={nextList.results} />
        <Image />
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}


export default PokemonListTwo;