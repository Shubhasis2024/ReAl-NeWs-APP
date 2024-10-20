import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title,description,imgurl}=this.props
    return (
      <div className="my-3">
            <div className="card" Style="width: 18rem;">
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/.newsdetails" className="btn btn-sm btn-primary">Get Detalis</a>
  </div>
</div>   
      </div>
    )
  }
}

export default Newsitems
