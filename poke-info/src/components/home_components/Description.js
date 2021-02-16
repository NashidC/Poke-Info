import axios from 'axios';
import React, { useState, useEffect } from "react";


function Description(props) {
  
  const [moveDescrip, setMoveDescrip] = useState(undefined);



  let url = props.moveName;

  const fetchDescription = async () => {
    const response = await axios.get(url);
    setMoveDescrip(response.data)
  }

  useEffect(() => { 
    fetchDescription();
  }, [])
  


  if (moveDescrip !== undefined) {
    return (
      <div>
        <p>{moveDescrip.effect_entries[0].effect}</p>
      </div>
    )
  } else { 
    return (
      <div></div>
    )
  }
}



export default Description;