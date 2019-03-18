import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  
  function handleClick(hostObj){
      props.hostClick(hostObj)
  }

  return(
  
    <Card
      className="host"
        //  NOTE: The className "host selected" renders a different style than simply "host". 
      onClick={()=>handleClick(props.hostObj)}
      image={props.hostObj.imageUrl}
      raised
    />
  )
}

export default Host
