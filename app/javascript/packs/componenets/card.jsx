import React from 'react'

const card = (props) => {
  return(
    <div className="card">
      <div className="descp">
        <h3>{props.title}</h3>
        <p>{props.date} at {props.location}</p>
        <p>{props.going} Going | {props.genre}</p>
      </div>
      <a>
        <img src={props.photo === null ? "https://img.freepik.com/free-photo/people-enjoying-party_53876-32853.jpg?size=626&ext=jpg" : props.photo} alt=""/>
      </a>
    </div>
  )
}
export default card;
