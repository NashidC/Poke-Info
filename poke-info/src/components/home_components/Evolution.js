import axios from "axios";
import { useState, useEffect } from "react";
import Stage from './Stage';

function Evolution(props){ 

  const [evolution, setEvolution] = useState(undefined);



  const fetchEvolution = async () => { 
    const response = await axios.get(props.pokemonEvolution.url);
    setEvolution(response.data)
  }

  useEffect(() => {
    fetchEvolution();
  }, []);




  if (evolution !== undefined) {
    return (
      <div>
        <h3>Evolution</h3>
        <div>
          <Stage stages={evolution} />
        </div>
      </div>  
    )
  } else { 
    return (
      <div></div>
    )
  }
}


export default Evolution;