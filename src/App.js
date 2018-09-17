import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ColorForm from './components/forms/ColorForm';
import CardList from './components//cardList/CardList';
import './App.css';

import store from './store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="side-bar">
              <Route path="/" component={ColorForm} />
            </div>
            <Route path="/deck" component={CardList} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
