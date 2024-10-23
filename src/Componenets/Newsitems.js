import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title,description,imgurl,newsurl}=this.props
    return (
      <div className="my-3">
            <div className="card" Style="width: 18rem">
  <img src={!imgurl?"https://images.barrons.com/im-31549185?width=940&size=1.4695752009184846&pixel_ratio=1.5":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">Get Detalis</a>
  </div>
</div>   
      </div>
    )
  }
}

export default Newsitems
