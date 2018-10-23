import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Posts from './components/Posts/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>React TDD quickstart</h1>
          <Counter />

          <Posts />
        </div>
      </div>
    );
  }
}

export default App;
