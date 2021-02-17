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
    evolutionList = <div><ImageTwo stage={stage1} />{stage1} </div>
  } else if (stage3 === undefined) {
    evolutionList = <div><ImageTwo stage={stage1} />{stage1}<ImageTwo stage={stage2} /> {stage2}</div>
  } else {
    evolutionList = <div><ImageTwo stage={stage1} />{stage1}<ImageTwo stage={stage2} />{stage2}<ImageTwo stage={stage3} />{stage3}</div>
  }



  return (
    <div>{evolutionList}</div>
  )
}


export default Stage;

