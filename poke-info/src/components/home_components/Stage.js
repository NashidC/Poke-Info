import ImageTwo from './ImageTwo'


function Stage(props) { 

  const stages = props.stages.chain

  let stage1;
  let stage2;
  let stage3;
  

  if (stages.species.name) { 
    stage1 = stages.species.name
    if (stages.evolves_to[0]) {
      stage2 = stages.evolves_to[0].species.name
      if (stages.evolves_to[0].evolves_to[0]) {
        stage3 = stages.evolves_to[0].evolves_to[0].species.name
      } else { 
        stage3 = undefined;
      }
    } else { 
      stage2 = undefined;
    }
  }

  let evolutionList;
  
  if (stage2 === undefined && stage3 === undefined) {
    evolutionList = <ul><li><ImageTwo stage={stage1} />{stage1}</li></ul>
  } else if (stage3 === undefined) {
    evolutionList = <ul><li><ImageTwo stage={stage1} />{stage1}</li><li><ImageTwo stage={stage2} />{stage2}</li></ul>
  } else { 
    evolutionList = <ul><li><ImageTwo stage={stage1} />{stage1}</li><li><ImageTwo stage={stage2} />{stage2}</li><li><ImageTwo stage={stage3} />{stage3}</li></ul>
  }



  return (
    <div>{evolutionList}</div>
  )
}


export default Stage;
