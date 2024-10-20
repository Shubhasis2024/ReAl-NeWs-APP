import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
  render() {
    return (
      <div className="container" my-4>
      <h2>Top Headlines of NewsHub</h2>
      <div className="row">
      <div className="col-md-4">
      <Newsitems title="Mytitle" description="Mydescription" imgurl="https://i.blogs.es/4fcb29/1mina-de-bitcoin-portada/840_560.jpeg"/>
      </div>
      <div className="col-md-4">
      <Newsitems title="Mytitle" description="Mydescription"imgurl="https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d91147f331314988daca7da52f3f5982.jpg"/>
      </div>
      <div className="col-md-4">
      <Newsitems title="Mytitle" description="Mydescription"imgurl="https://i.insider.com/67058c9f3f2165d716df5b64?width=1200&format=jpeg"/>
      </div>

      </div>
      
      </div>
    )
  }
}

export default News
