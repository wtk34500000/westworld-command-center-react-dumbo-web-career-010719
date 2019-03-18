import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  const arrOfHosts = props.hosts.map(host => <Host key={host.id} hostObj={host} hostClick={props.hostClick} changeToggle={props.changeToggle}/>)
  return(
    <Card.Group itemsPerRow={6}>
      {arrOfHosts}
    </Card.Group>
  )
}

export default HostList
