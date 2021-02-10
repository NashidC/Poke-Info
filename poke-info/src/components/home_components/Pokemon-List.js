

function PokemonList(props) {

  const pokemons = props.apiData
  






  if (pokemons !== null) {
    return (
      <div>
        <ul>
          {
            pokemons.map((pokemon) => {
              return <li>{pokemon.name}</li>
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