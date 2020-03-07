// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { addressCT,abiCT } from "./ethereum/contractTools";
// import ethersProvider from "./ethereum/ether";

import Register from './Components/Register';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
// const ethers = require('ethers');
class App extends Component {

  // async componentDidMount(){
  //   window.ethereum.on('accountChanged', function(account) {
  //     const signer=ethersProvider.getSigner(0);
  //     const address= addressCT;
  //     const abi= abiCT;    
  //   })

  // }

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

