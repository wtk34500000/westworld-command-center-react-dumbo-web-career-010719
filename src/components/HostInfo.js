import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {
 
  // state = {
    // options: [this.props.hostArea]
    // This state is just to show how the dropdown component works.
    // Options have to be formatted in this way (array of objects with keys of: key, text, value)
    // Value has to match the value in the object to render the right text.
    // options: this.props.host.area
    // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  // }


  handleChange = (e, {value}) => {
    let n= this.props.hosts.filter(host => host.area === value).length
    let y = this.props.areas.find(area => area.name === value).limit
    
    if(n <= y){
      this.props.changeArea(this.props.host, value)
    }
    console.log(n, y)
    
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  toggle = () => {
       
      this.props.changeToggle(this.props.host)
  }

  render(){

    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.host.firstName} | { this.props.host.gender==="Male" ? <Icon name='man' /> : <Icon name='woman' />}
                { /* Think about how the above should work to conditionally render the right First Name and the right gender Icon */ }
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={!this.props.host.active? "Decommissioned":"Active"}
                  // {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}

                  checked={this.props.host.active === true? true:false}
                  // {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.host.area}
                options={this.props.hostArea}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
