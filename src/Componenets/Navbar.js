import React, { Component } from 'react'


export class Navbar extends Component {
 

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ReAlNewS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">IndianNews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Othernews</a>
        </li>
        <li className="nav-item"><a className="nav-link " href="/.indiannews">Indian News</a></li>
        <li className="nav-item"><a className="nav-link " href="/.busniess">Busniess</a></li>
        <li className="nav-item"><a className="nav-link " href="/.politics">Politics</a></li>
        <li className="nav-item"><a className="nav-link " href="/.health">Health</a></li>
        <li className="nav-item"><a className="nav-link " href="/.weather">Weather</a></li>
        <li className="nav-item"><a className="nav-link " href="/.sports">Sports</a></li>

       </ul>   
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar