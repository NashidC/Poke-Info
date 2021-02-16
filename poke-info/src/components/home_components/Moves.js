import axios from 'axios';
import React, { useState, useEffect } from "react";



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
  
  
  console.log(move)

  
  
  
  if (move !== undefined) {
    return (
      <div>
        
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}


export default Moves;