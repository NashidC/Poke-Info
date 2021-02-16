import axios from 'axios';
import React, { useState, useEffect } from "react";
import Description from './Description';


function Moves(props) { 

  const [move, setMove] = useState(undefined);



  let url = `https://pokeapi.co/api/v2/pokemon/${props.name}/`;



  const fetchMove = async () => {
    const response = await axios.get(url);
    setMove(response.data)
  }

  useEffect(() => { 
    fetchMove();
  },[])
  
  
  if (move !== undefined) {
    return (
      <div>
        <ul>
          <li><h4>{move.moves[0].move.name}</h4><Description moveName={move.moves[0].move.url} /></li>
          <li><h4>{move.moves[1].move.name}</h4><Description moveName={move.moves[1].move.url} /></li>
          <li><h4>{move.moves[2].move.name}</h4><Description moveName={move.moves[2].move.url} /></li>
          <li><h4>{move.moves[3].move.name}</h4><Description moveName={move.moves[3].move.url} /></li>
        </ul>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}


export default Moves;