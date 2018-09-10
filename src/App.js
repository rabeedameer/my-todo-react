import React, { Component } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header tagline="This could be your shopping list"/>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
