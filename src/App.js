import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor() {
  super()

  this.state = {
    isMobileOpen: false
  }
}

toggleMenuSelect = () => {
  this.setState({
    isMobileOpen: !this.state.isMobileOpen
  });
}

  render() {
    return (
      <div className="page-top">
        
        <nav className="navbar-container">
          <div className="navbar">
            <a className="navbar-logo-title" href=".page-top">
              <img src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="logo to site"></img>
            </a>
            <div className="navbar-selection-container">
                <ul className="navbar-selection">
                  <li className="nav-item">Services</li>
                  <li className="nav-item">Portfolio</li>
                  <li className="nav-item">About</li>
                  <li className="nav-item">Team</li>
                  <li className="nav-item">Contact</li>
                </ul>
            </div>


            <button className="button-appear" onClick={this.toggleMenuSelect}>Menu <img src="https://www.contentformula.com/blog/wp-content/uploads/2016/06/hamburger-menu.png" alt="hamburger icon for drop down me" ></img></button>
            <div className="mobile-navbar-selection-container">
                <ul className={`mobile-navbar-selection ${this.state.isMobileOpen ? 'mobile-nav-item-open' : null}`}>
                  <li className="mobile-nav-item">Services</li>
                  <li className="mobile-nav-item">Portfolio</li> 
                  <li className="mobile-nav-item">About</li>
                  <li className="mobile-nav-item">Team</li>
                  <li className="mobile-nav-item">Contact</li>
                </ul>
            </div>

          </div>
        </nav>


        <header className="main-welcome-container">
          <div className="main-welcome">
            <p className="welcome-subhead">Welcome to our Studio!</p>
            <div className="nice-header">It's Nice to Meet You</div>
            <button className="more-button">Tell Me More</button>
          </div>
        </header>
      </div>
    );
  }
 
}

export default App;
