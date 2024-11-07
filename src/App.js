import './App.css';


import React, { Component } from 'react'
import Navbar from './Componenets/Navbar';
import News from'./Componenets/News';

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API
  render() {
   
    return (
      <div>
       <Navbar></Navbar>
       <News apikey={this.apikey}></News>
      </div>
    )
  }
}