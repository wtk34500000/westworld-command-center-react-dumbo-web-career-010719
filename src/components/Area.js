import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = (props) => {
   const areahost = props.filterHostToArea.filter(host=> host.area === props.areaObj.name)
    return (<div className='area' id={props.areaObj.name}>
      <h3 className='labels'>{props.areaObj.name}</h3>
        <HostList hosts={areahost} hostClick={props.hostClick} host={props.host}/>
    </div>)
  
  
}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
