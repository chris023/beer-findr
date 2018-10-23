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
        <Header />
        <Search />
        <CardContainer />
      </div>
    );
  }
}

export default App;
