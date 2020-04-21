import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Index';
import Match from './deck';
import Navbar from './navbar';
import Eventc from './eventcreate';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route path="/match" component={Match}/>
            <Route exact path="/" component={Home}/>
            <Route path="/create" component={Eventc}/>
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
