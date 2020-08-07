import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Content from "./components/content";
class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="App">
          <Navbar togglesidebar={this.togglesidebar}/>
        <Sidebar />
          <Content />
      </div>
    );
  }
  togglesidebar=()=>{
    // console.log(document.getElementById("sidebar"));
   document.getElementById("sidebar").classList.toggle('active');
   let menubtn=document.querySelector(".menu-btn");
   menubtn.classList.toggle('open');
   document.getElementById("content").classList.toggle('opensidebar');
}
}
 
export default App;
