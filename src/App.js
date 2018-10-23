import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import CardContainer from './Components/CardContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Beer Findr</h1>
        <h2></h2>
        <Search />
        <CardContainer />
      </div>
    );
  }
}

export default App;
