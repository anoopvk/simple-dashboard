import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      
      <nav className="navbar navbar-expand-md navbar-dark bg-dark2 pl-0">
      <header>A<span className="logostyle">NOOB</span>IE</header>
      <ul className="navbar-nav">
          <li className="nav-item">
              <a href="#" className="nav-link">DASHBOARD</a>
          </li>
      </ul>

      <div className="ml-auto">
          <div className="menu-btn " onClick={this.props.togglesidebar}>
              <div className="btn-burger"></div>
          </div>
      </div>
  </nav>
      
    );
  }
  
}

export default Navbar;
