// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Register from './Components/Register';
import Home from './Components/Home'
import Navigation from './Components/Navigation'
class App extends Component {


  render() {
    return (
       <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

