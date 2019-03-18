import React from 'react'
import { Segment, Button } from 'semantic-ui-react';

class LogPanel extends React.Component{
  state={
    check :false
  }
  

   dummyLogs = () => {
    // This is just to show you how this should work. But where should the log data actually get stored?
    // And where should we be creating logs in the first place?
    // Use the Log Service class (located in: 'src/services/Log') we've created anywhere you like.
    // Just remember to import it

    let logs = this.props.log

    // logs.unshift(Log.warn("This is an example of a warn log"))
    // logs.unshift(Log.notify("This is an example of a notify log"))
    // logs.unshift(Log.error("This is an example of an error log"))

    return logs
  }

   activeAll = (hosts, check) =>{
    
    this.props.activeAll(hosts, check)
     this.setState({
      check: !this.state.check
    })
    
  }
  render(){
  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {this.dummyLogs().map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
      </pre>
      
      {/* Button below is the Activate All/Decommisssion All button */}
      <Button
        fluid
        color={!this.state.check ? "red": "green"}
        // {/* This isn't always going to be the same color...*/}
        content={!this.state.check ? "ACTIVATE ALL":"DECOMMISSION ALL"}
        onClick={()=> this.activeAll(this.props.hostAll, this.state.check)}
        // {/* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */}
      />
    </Segment>
  )
  }
}

export default LogPanel
