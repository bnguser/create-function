import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, i'm react app</h1>
        <p>This is really working</p>
        <Person name ='max' age ='28'/>
        <Person name = 'manu' age ='29'>My hobbies : Racing</Person>
        <Person name = 'sathish' age = '30'/>
        <Person />
      </div>
    );
  }
}

export default App;
