import React, { Component } from 'react'
import YouTube from 'react-youtube'


class ReactYouTube extends Component {
  videoOnReady (event) {

    const player = event.target

    console.log(event.target)
  }
  videoOnPlay (event) {
    
    const player = event.target

  }
  videoStateChange (event) {
    const player = event.target
    console.log(player.getCurrentTime())
  }


  render () {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }
    const {videoId} = this.props
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoStateChange}
      />
    )
  }
}

export default ReactYouTube
