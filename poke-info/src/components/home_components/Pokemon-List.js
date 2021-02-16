


import Image from './Image'

function PokemonList(props) {


  const pokemons = props.apiData.results

  return (

    // <ul>
    <div className="grid-container">

      {
        pokemons.map((pokemon, index) => {
          return (
            <div className="Card">
              <div className="Card_name">
                {/* <li key={pokemon.name}> */}
                <Image imageName={pokemon.name} /><br />
                {pokemon.name}
                {/* </li> */}
              </div>
            </div>
          )
        })
      }
    </div>
    // </ul>

  )
}


export default PokemonList;





