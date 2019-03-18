import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {
  // console.log("inside westworld", props.setHostToArea)
  const arrOfAreas = props.areas.map(area => <Area key={area.id} hostClick={props.hostClick} host={props.host} areaObj={area} filterHostToArea={props.filterHostToArea}/>)
  return (
    <Segment id="map" >
      {arrOfAreas}
    </Segment>
  )
}

export default WestworldMap
