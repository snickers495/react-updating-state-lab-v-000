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

  handleBit = (){
    this.setState({this.state.})
  }
  render(){
    return(
      <div>
        <button className='bitrate' onClick={this.handleBit}>Bitrate</button>
        <button className='resolution' onClick={this.handleRes}>Resolution</button>
      </div>
    )
  }
}
