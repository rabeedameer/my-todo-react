import React, { Component } from 'react';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          This is my to do list .
        </p>
      </div>
    );
  }
}

export default App;
