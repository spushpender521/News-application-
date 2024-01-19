import React, { Component } from 'react'
import loading from  './Ajax-loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
          <img src={loading}/>
      </div>
    )
  }
}

export default Spinner
