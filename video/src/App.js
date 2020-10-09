import React, { Component } from 'react'
// import PostSorting from './posts/PostSorting'
import './App.css'

import ReactYouTube from './thirdParty/ReactYouTube'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Blossom World Society</h1>
        <ReactYouTube videoId='21DCn9kWcfM'/>
      </div>
    )
  }
}

export default App