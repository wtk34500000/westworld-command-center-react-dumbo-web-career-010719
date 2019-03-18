import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import Headquarters from '../src/components/Headquarters';
import WestworldMap from '../src/components/WestworldMap';
import {Log} from './services/Log'

class App extends Component {
  
  state ={
    hosts: [],
    areas: [],
    host: {},
    log: []
    // filterHostToCold: [],
    // filterHostToArea: []

  }

  // hostClick = (hostObj) =>{
    
  // }
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  componentDidMount() {
    fetch('http://localhost:4000/areas')
    .then(resp => resp.json())
    .then(areas => this.setState({areas}))

    fetch('http://localhost:4000/hosts')
    .then(resp => resp.json())
    .then(hosts => this.setState({hosts}))

  }

  activeAll=(hosts, check)=>{
    
    if(check===false){
      const log= [...this.state.log, Log.warn('Activating all hosts!')]
      this.setState({log})
      const newHostArr=[...hosts]
      newHostArr.forEach(host => host.active=true)
    
      this.setState({
        hosts: newHostArr
      })
    }else{
      const log= [...this.state.log, Log.notify('Decommissiong all hosts.')]
      this.setState({log})
      const newHostArr=[...hosts]
      newHostArr.forEach(host => host.active=false)
    
      this.setState({
        hosts: newHostArr
      })
    }
    
  }

  changeToggle = (hostObj) => {
    
      const newArr = [...this.state.hosts]
      const foundHost=newArr.find(host => hostObj.id === host.id)
      foundHost.active=!foundHost.active
      if(foundHost.active===true){
        const log= [...this.state.log, Log.warn(`Warn: Activated ${foundHost.firstName}`)]
        this.setState({log})
      }else{
        const log= [...this.state.log, Log.notify(`Notify: Decommissioned ${foundHost.firstName}`)]
        this.setState({log})
      }
      this.setState({
        hosts: newArr
      })
  
  }

  hostClick =(hostObj)=>{
    this.setState({
      host: hostObj
    })
   }

  changeArea = (hostObj, value) => {
    const newArr = [...this.state.hosts]
    const foundHost=newArr.find(host => hostObj.id === host.id)
    foundHost.area=value
    const log= [...this.state.log, Log.notify(`Notify: ${foundHost.firstName} set in area ${foundHost.area}`)]
    this.setState({log})
    this.setState({
      hosts: newArr
    })
  }

  // filterHostToCold=()=>{
  //     const filterArr=this.state.hosts.filter(host => host.active === false)
  //     this.setState({
  //       filterHostToCold: filterArr
  //     })
  // }

  // filterHostToArea=()=>{
  //   const filterArr=this.state.hosts.filter(host => host.active === true)
  //   this.setState({
  //     filterHostToArea: filterArr
  //   })
  // }

  render(){
    const filterHostToCold=this.state.hosts.filter(host => host.active === false)
    const filterHostToArea=this.state.hosts.filter(host => host.active === true)
    
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap areas={this.state.areas} filterHostToArea={filterHostToArea} host={this.state.host} hostClick={this.hostClick}/>
        <Headquarters log={this.state.log} host={this.state.host} hostClick={this.hostClick} hosts={filterHostToCold} changeToggle={this.changeToggle} areas={this.state.areas} changeArea={this.changeArea} hostAll={this.state.hosts} activeAll={this.activeAll}/>
      </Segment>
    )
  }
}

export default App;
