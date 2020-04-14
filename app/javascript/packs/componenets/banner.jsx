import React from 'react'

const banner = (props) => {
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
          <div className="dropdown">
          <p className="dropdown-toggle" type="button" id="miles" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Within 5 miles..
          </p>
          <div className="dropdown-menu" aria-labelledby="miles">
            <button onClick={(e) => props.milesHandler(e)} className="opt dropdown-item active" type="button">5 miles</button>
            <button onClick={(e) => props.milesHandler(e)} className="opt dropdown-item" type="button">10 miles</button>
            <button onClick={(e) => props.milesHandler(e)} className="opt dropdown-item" type="button">15 miles</button>
            <button onClick={(e) => props.milesHandler(e)} className="opt dropdown-item" type="button">50 miles</button>
            <button onClick={(e) => props.milesHandler(e)} className="opt dropdown-item" type="button">100 miles</button>
            <button onClick={(e) => props.milesHandler(e)} className="opt dropdown-item" type="button">Any distance</button>
          </div>
          </div>
            {/* <p>within 5. miles</p> */}
          </div>
          <div className="buttons">
            <button onClick={(e) => props.eventHandler(e)} className="btn btn-secondary active">Free</button>
            <button onClick={(e) => props.eventHandler(e)} className="btn btn-secondary">Paid</button>
            <button className="go-button" onClick={() => props.fetchData()}><span className="iconify" data-icon="logos:go" data-inline="false"></span></button>
          </div>
      </div>
    </div>
  )
}
export default banner
