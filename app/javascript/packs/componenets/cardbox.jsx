import React from 'react'
import Spinner from '@bit/joshk.react-spinners-css.facebook';
import Card from './card';

const loadevent = (events) => {
  if (events === null || events === "Empty")
    return <h3>Pepole are tired ☹</h3>;
  else{
     return events.map(event => <Card photo={event.photo} key={event.key} title={event.name} date={event.date} location={event.location} genre={event.categories.join(', ')} going={event.going}/>)
    }
}

const cardbox = (props) => {
  let loading, today, tomorrow;
  if (props.isloading === true)
    loading = <Spinner color="#be97e8" className="loader"/>
  else if (today !== null && tomorrow !== null) {
    today = loadevent(props.today);
    tomorrow = loadevent(props.tomorrow);
    loading = null;
  }
  return(
    <div className="cardbox">
      <h2>HOT TODAY</h2>
      <div className="cards">
      {loading}
      {today}
      </div>
      <h2>HOT TOMORROW</h2>
      <div className="cards">
      {loading}
      {tomorrow}
      </div>
    </div>
  )
}
export default cardbox;