import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
            <Route path="/" component={ColorForm} />
            <Route path="/deck" component={CardList} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
