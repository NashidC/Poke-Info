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
  }, [])


  if (move !== undefined) {
    return (
      <div>
        <table border={1}>
          <tbody>

            <tr><td className='move-name'><h4>{move.moves[0].move.name}</h4></td> <td className='move-value'><Description moveName={move.moves[0].move.url} /></td></tr>
            <tr><td className='move-name'><h4>{move.moves[1].move.name}</h4></td> <td className='move-value'><Description moveName={move.moves[1].move.url} /></td></tr>
            <tr><td className='move-name'><h4>{move.moves[2].move.name}</h4></td> <td className='move-value'><Description moveName={move.moves[2].move.url} /></td></tr>
            <tr><td className='move-name'><h4>{move.moves[3].move.name}</h4></td> <td className='move-value'><Description moveName={move.moves[3].move.url} /></td></tr>
          </tbody>
        </table >
      </div >
    )
  } else {
    return (
      <div></div>
    )
  }
}


export default Moves;