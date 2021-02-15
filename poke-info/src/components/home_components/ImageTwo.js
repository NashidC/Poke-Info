import React, { useState, useEffect } from "react";
import axios from "axios";





function ImageTwo(props) { 

  
  const [stageEvolution, setStageEvolution] = useState([]);
  console.log(props.stage)


  
  
  
  const getStage = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.stage}`);
    setStageEvolution(response.data.sprites.front_default);
  }
  
  
  useEffect(() => {
    getStage()
  }, [])




  return (
     <img src={stageEvolution} />
  )

}



export default ImageTwo;

