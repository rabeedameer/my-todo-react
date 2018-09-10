import React, { Component } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import {getRandomTagline} from './helpers.js';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header tagline={getRandomTagline()}/>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
