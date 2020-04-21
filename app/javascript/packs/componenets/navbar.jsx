import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class Navbar extends Component{
  state = {
    islogged: false,
    image: null,
    csrf: null
  }
  islogged = async () => {
    const response = await fetch(`${location.origin}/login`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
        'X-CSRF-Token': this.state.csrf,
        'Content-Type': 'application/json'
      }});
      const data = await response.json().catch(() => {
        alert('failed');
      });
      (data['user'] === undefined) ? this.setState({islogged: false}) : this.setState({islogged: true})
  }
  logout = async () => {
    await fetch(`${location.origin}/logout`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
        'X-CSRF-Token': this.state.csrf,
        'Content-Type': 'application/json'
    }})
    this.setState({islogged: false})
  };
  componentDidMount() {
    this.setState({csrf: document.querySelector("meta[name='csrf-token']").getAttribute("content")});
    this.islogged();
  }
    render() {
      const desktoplogo = location.origin + "/mixerzlogo.png";
      const mobilelogo = location.origin + "/mobile.png";
      return (
          <div className="mnavbar">
              <img src={desktoplogo} alt="Mixerz logo" className="brand-img-desktop"/>
              <img src={mobilelogo} alt="Mixerz logo" className="brand-img-mobile"/>
              <li>
              <Link to="/chat"className="mobile-nav">
                <div>
                    <span className="iconify" data-icon="jam:messages" data-inline="false"></span>
                    <h2>Messages</h2>
                </div>
              </Link>
              <Link className="mobile-nav" to="/">
                <div>
                <span style={{marginBottom: '-2px'}} className="iconify" data-icon="ic:baseline-explore" data-inline="false"></span>
                <h2>Explore</h2>
                </div>
              </Link>
              <Link className="mobile-nav" to="/match">
                <div >
                <span className="iconify" data-icon="whh:findfriends" data-inline="false"></span>
                <h2>Match</h2>
                </div>
              </Link>
              <Link to="/chat">
                <h2 className="desktop-nav" >Messages</h2>
              </Link>
              <Link to="/">
                <h2 className="desktop-nav" >Explore</h2>
              </Link>
              <Link to="/match">
                <h2 className="desktop-nav" >Match</h2>
              </Link>
              <div className="dropdown dropleft avatar-mobile">
              <img src="https://kitt.lewagon.com/placeholder/users/ssaunier" alt="User" className="avatar dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to="/profile"><span className="dropdown-item">Profile</span></Link>
                <Link to="/create"><span className="dropdown-item">Create Event</span></Link>
                {this.state.islogged ?
                <Link onClick={() => this.logout()} to="/"><span className="dropdown-item">Logout</span></Link>
                :
                <Link to={{pathname: '/session', logHandler: () => this.setState({islogged: true})}}><span className="dropdown-item">Login</span></Link>
                }
              </div>
              </div>
              </li>

          </div>
      )
  }
}
export default Navbar;
