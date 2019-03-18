import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'

class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
  // state={
  //   host: {},
  // }

  // hostClick =(hostObj)=>{
  //  this.setState({
  //    host: hostObj
  //  })
  // }

  // createHostArea =()=> {
  //   const hostArea= this.props.areas.map(area => {return {key: area.name, text: area.name, value: area.name}})
  //   this.setState({hostArea:hostArea })
  // }
  
  // {key: "some_area", text: "Some Area", value: "some_area"}
  render(){
    // createHostArea()
    const hostArea= this.props.areas.map(area => {return {key: area.name, text: area.name, value: area.name}})
   
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        {/* Something goes here.... */}
        <ColdStorage hosts={this.props.hosts} hostClick={this.props.hostClick} />

        </Grid.Column>
        <Grid.Column width={5}>
          <Details hosts={this.props.hosts} areas={this.props.areas} host={this.props.host} changeToggle={this.props.changeToggle} hostArea={hostArea} changeArea={this.props.changeArea}/>
        </Grid.Column>
        <Grid.Column width={3}>

        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        <LogPanel hostAll={this.props.hostAll} activeAll={this.props.activeAll} log={this.props.log}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
