import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Index';
import Match from './deck';
import Navbar from './navbar';
import Eventc from './eventcreate';
import Profile from './profile';
import Footer from './footer';
import Signin from './signin';
import Session from './Session';

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
            <Route path="/profile" component={Profile}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/session" component={Session}/>
          </Switch>
          <Footer/>

        </div>
        </BrowserRouter>
    );
  }
}

export default App;
