import React, { Component } from 'react';
import ColorForm from './components/forms/ColorForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the home page</h1>
        <ColorForm />
      </div>
    );
  }
}

export default App;
