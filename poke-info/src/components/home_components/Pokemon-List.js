// import getByName from '../../services/getByName';

import Image from './Image'

function PokemonList(props) {

  
  const pokemons = props.apiData.results
  
    return (
      <div>
        <ul>
          {
            pokemons.map((pokemon, index) => { 
              return <li key={pokemon.name}><Image imageName={pokemon.name} />{pokemon.name}</li>
            })
          }
        </ul>
      </div>
    )
}


export default PokemonList;





