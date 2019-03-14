import React, { Component } from 'react';
import './App.css';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import Education from './components/Education';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route exact path="/Education" component={Education} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;