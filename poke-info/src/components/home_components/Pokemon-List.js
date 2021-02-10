import getByName from '../../services/getByName';



function PokemonList(props) {

  const pokemons = props.apiData

 






  if (pokemons !== null) {
    return (
      <div>
        <ul>
          {
            pokemons.map((pokemon) => { 
              
              const response = async () => { 
                const data = await getByName(pokemon.name)
                console.log(data);
              }
              response();

              console.log(pokemon)
              return <li key={pokemon.name}><img url="" />{pokemon.name}</li>
            })
          }
        </ul>
      </div>
    )
  } else { 
    return (
      <div>

      </div>
    )
  }
}


export default PokemonList;