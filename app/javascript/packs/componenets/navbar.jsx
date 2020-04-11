import React from 'react'

const navbar = (props) => {
    const desktoplogo = location.origin + "/mixerzlogo.png"
    const mobilelogo = location.origin + "/mobile.png"
    return (
        <div className="mnavbar">
            <img src={desktoplogo} alt="Mixerz logo" className="brand-img-desktop"/>
            <img src={mobilelogo} alt="Mixerz logo" className="brand-img-mobile"/>
            <li>
            <div className="mobile-nav">
                <span className="iconify" data-icon="jam:messages" data-inline="false"></span>
                <h2>Messages</h2>
            </div>
            <div className="mobile-nav">
            <span className="iconify" data-icon="ic:baseline-explore" data-inline="false"></span>
                <h2>Explore</h2>
            </div>
            <div className="mobile-nav">
            <span className="iconify" data-icon="whh:findfriends" data-inline="false"></span>
                <h2>Match</h2>
            </div>
            <a className="desktop-nav" href="">Messages</a>
            <a className="desktop-nav active" href="">Explore</a>
            <a className="desktop-nav" href="">Match</a>
            <div className="dropdown dropleft avatar-mobile">
            <img src="https://kitt.lewagon.com/placeholder/users/ssaunier" alt="User" className="avatar dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Profile</a>
                <a className="dropdown-item" href="#">Create Event</a>
                <a className="dropdown-item" href="#">Logout</a>
            </div>
            </div>
            </li>
        </div>
    )
}
export default navbar;