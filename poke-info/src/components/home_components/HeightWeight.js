import React, { useState, useEffect } from "react";
import axios from 'axios';



function HeightWeight(props) {

  const [scale, setScale] = useState(undefined);


  let url = `https://pokeapi.co/api/v2/pokemon/${props.heightWeight}/`;


  const fetchScale = async () => {
    const response = await axios.get(url);
    setScale(response.data)
  }

  useEffect(() => {
    fetchScale();
  }, [])



  if (scale !== undefined) {
    return (
      <div>
        <p>{"Height: " + scale.height / 10 + "m"}</p>
        <p>{"Weight: " + scale.weight / 10 + "kg"}</p>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}



export default HeightWeight;