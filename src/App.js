import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './components/layout/Layout'
import './App.css';

import store from './store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
              <Route path="/" component={Layout} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
