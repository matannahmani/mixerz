import React from 'react'
import {Link} from 'react-router-dom';
const navbar = (props) => {
    const desktoplogo = location.origin + "/mixerzlogo.png"
    const mobilelogo = location.origin + "/mobile.png"
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
              <Link to="/create"><span className="dropdown-item" href="#">Create Event</span></Link>
              <Link to="/logout"><span className="dropdown-item" href="#">Logout</span></Link>
            </div>
            </div>
            </li>

        </div>
    )
}
export default navbar;
