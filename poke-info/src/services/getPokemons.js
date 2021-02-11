import axios from "axios"
import url from './url';



async function getPokemons() { 

  const data = await axios.get(url).then(({ data }) => {
    return data;
  });

  return data;
}


export default getPokemons;