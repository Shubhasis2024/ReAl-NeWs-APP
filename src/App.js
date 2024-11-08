import './App.css';


import React from 'react'
import Navbar from './Componenets/Navbar';
import News from'./Componenets/News';

const App=()=> {
  const apikey=process.env.REACT_APP_NEWS_API
  
   
    return (
      <div>
       <Navbar></Navbar>
       <News apikey={apikey}></News>
      </div>
    )

};
export default App;