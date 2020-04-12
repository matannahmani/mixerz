import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Index';
import Match from './match';
import Navbar from './navbar';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route path="/match" component={Match}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
