import React, { Component } from 'react';
import './App.css';

import NavBar from './Components/NavBar';
import PieList from './Components/PieList';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <PieList />
      </div>
    );
  }
}

export default App;
