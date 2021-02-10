import axios from "axios";



async function getByName(name) { 

  const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(({ data }) => {
    return data;
  });


  return data;
}



export default getByName;