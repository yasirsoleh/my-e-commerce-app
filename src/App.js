import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Products from './Components/Products';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <Navbar></Navbar>
        <Products></Products>
      </div>
    );
  }
}
 
export default App;
