import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
let {title , imageurl , url, date, source}=this.props
    return (
      <div> 
        
        <div className="card" style={{width: "18rem"}}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={ {left: '90%' }}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
      <img src={imageurl}  alt=''/>
       <div className="card-body">
       <h5 className="card-title">{title}</h5>
       <p className="card-text">{this.props.discription}</p>
       <p class="card-text"><small class="text-body-secondary"> By {this.props.author} on {new Date(date).toGMTString()} </small></p>
       <a href={url}   className="btn btn-dark">Read more</a>
       </div>
     </div>
      </div> 
    )
  }
}

export default Newsitem
