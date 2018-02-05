// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react';
export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8,
                  video: { resolution: '1080p' } }
    }
  }

  handleClick = (){
    this.setState({timesClicked: this.state.timesClicked++})
  }
  render(){
    return(
      <div>
      <button className='bitrate' onClick={this.handleClick}>Bitrate</button>
    )
  }
}
