import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Index';
import Match from './deck';
import Navbar from './navbar';
import Eventc from './eventcreate';
import Session from './signin';
import Profile from './profile';

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
            <Route path="/session" component={Session}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
