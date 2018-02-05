// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react';
export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (){
    this.setState({timesClicked: this.state.timesClicked++})
  }
  render(){
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
