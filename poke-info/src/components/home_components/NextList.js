import ImageTwo from "./ImageTwo"



function NextList(props) { 

  console.log(props.nextPokemons)
  let nextPokemons = props.nextPokemons;



  return (
    <div>
      <ul>
        {nextPokemons.map((pokemon) => { 
           return <li key={pokemon.name}><ImageTwo imageName={pokemon.name} />{pokemon.name}</li>
        })
        }
      </ul>
    </div>
  )
}


export default NextList;