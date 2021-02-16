import ImageTwo from "./ImageTwo"



function NextList(props) {

  console.log(props.nextPokemons)
  let nextPokemons = props.nextPokemons;



  return (
    <div className="grid-container">
      {/* <ul> */}
      {nextPokemons.map((pokemon) => {
        return (
          <div className="Card">
            <div className="Card_name">
              {/* <li key={pokemon.name}> */}
              <ImageTwo imageName={pokemon.name} /><br />
              {pokemon.name}
              {/* </li> */}
            </div>
          </div>
        )
      })
      }
      {/* </ul> */}
    </div>
  )
}


export default NextList;