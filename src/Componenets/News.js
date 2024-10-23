import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {


  constructor(){
super();
    this.state={
    articles:[],
    loading:false
    }
  }
   async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8287e60ed5e342779fa9816f0ed113a6 ";
    let data=  await fetch(url);
    let newdata=await data.json();
    this.setState({articles:newdata.articles})
  }
  render() {
    return (
      <div className="container" my-4>
      <h2>Top Headlines of NewsHub</h2>
      
      <div className="row">
      {this.state.articles.map((ele)=>
      {
       return <div className="col-md-4">
      <Newsitems key={ele.url} title={ele.title} description={ele.content} imgurl={ele.urlToImage} newsurl={ele.url}/>
      </div>

      })}
      </div>
      </div>
    )
  }
}

export default News
