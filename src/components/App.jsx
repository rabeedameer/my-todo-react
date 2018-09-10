import React, { Component } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {getRandomTagline} from '../helpers.js';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header tagline={getRandomTagline()}/>
        <ToDoForm/>
        <ToDoList/>
      </div>
    );
  }
};

export default App;