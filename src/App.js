import React, { Component } from 'react';
import './App.css';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import Education from './components/Education';
import About from './components/About';
import Market from './components/Market';
import PriceMatch from './components/PriceMatch';
import Contact from './components/Contact';

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
            <Route exact path="/About" component={About} />
            <Route exact path="/Market" component={Market} />
            <Route exact path="/PriceMatch" component={PriceMatch} />
            <Route exact path="/Contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;