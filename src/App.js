import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ColorForm from './components/forms/ColorForm'
import './App.css';

import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={ColorForm} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
