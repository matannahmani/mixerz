import React from 'react'

const banner = () => {
  return(
    <div className="banner">
      <h1>Find your next hangout.</h1>
      <h3>80 adventures near you</h3>
      <div className="search">
        <div className="form">
          <input type="text" placeholder="Search"/>
          <span className="iconify" data-icon="bx:bx-search" data-inline="false"></span>
        </div>
        <div className="mobile-options">
          <button className="btn btn-secondary mobile-options">Options</button>
        </div>
          <div className="options">
            <p>within 5. miles</p>
          </div>
          <div className="buttons">
            <a href="" className="btn btn-secondary active">Party</a>
            <a href="" className="btn btn-secondary">Lookers</a>
          </div>
      </div>
    </div>
  )
}
export default banner
