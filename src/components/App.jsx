import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {getRandomTagline} from '../helpers.js';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      toDoItems: {}
    }
  }
  addToDo = text => {
    const todo = {
      uuid: uuid(),
      text: text,
      done: false
    };
    this.setState(state => {
      state.toDoItems[todo.uuid] = todo;
      return state;
    });
  };
  render() {
    return (
      <div className="container">
        <Header tagline={getRandomTagline()}/>
        <ToDoForm addToDo={this.addToDo}/>
        <ToDoList/>
      </div>
    );
  }
};

export default App;
