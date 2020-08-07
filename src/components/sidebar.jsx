import React, { Component } from "react";
class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div id="sidebar" className="sidebar">
      <ul>
          <li className="activedashboard">Dashboard</li>
          <li>About</li>
          <li>Alpha</li>
          <li>Beta</li>
      </ul>
  </div>
      
    );
  }
}

export default Sidebar;
