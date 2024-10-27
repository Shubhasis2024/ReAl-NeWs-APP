import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {


  constructor(){
super();
    this.state={
    articles:[],
    loading:false,
    page:1
    }
  }
   async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8287e60ed5e342779fa9816f0ed113a6&page=1 ";
    let data=  await fetch(url);
    let newdata=await data.json();
    this.setState({articles:newdata.articles})
  }

  previouspage= async()=>{
    console.log("PREVIOUS")
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8287e60ed5e342779fa9816f0ed113a6&page=${this.state.page-1}`;
          let data=  await fetch(url);
          let newdata=await data.json();
        

      this.setState({
        page:this.state.page-1,
        articles:newdata.articles
      })
   
  }
 nextpage= async()=>{
      console.log("next")
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8287e60ed5e342779fa9816f0ed113a6&page=${this.state.page+1}`;
          let data=  await fetch(url);
          let newdata=await data.json();
        

      this.setState({
        page:this.state.page+1,
        articles:newdata.articles
      })
}
  render() {
    return (
      <div className="container" my-4>
        <h1 className='text-center'>Top Headlines from NewsHub</h1>
       
        <div className="row">
        {this.state.articles.map((ele)=>
        {
        return <div className="col-md-4">
        <Newsitems key={ele.url} title={ele.title} description={ele.content} imgurl={ele.urlToImage} newsurl={ele.url}/>
        </div>

        })}
        </div>

          <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-warning"onClick={this.previouspage}>&larr; Previous</button>
          <button disabled={this.state.page>this.state.page+2}  type="button" className="btn btn-info"onClick={this.nextpage}>Next &rarr; </button>
          </div>
      </div>
    )
  }
}

export default News
