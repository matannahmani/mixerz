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

const profilecard = (props) => {
  let loading, going, hosting, week;
  if (props.isloading === true)
    loading = <Spinner color="#be97e8" className="loader"/>
  else if (props.events.going !== null && props.events.hosting !== null) {
    going = loadevent(props.event.going);
    hosting = loadevent(props.event.hosting);
    week = loadevent(props.week);

    loading = null;
  }
  else
      going = hosting = <h3>No events ☹</h3>;
  return(
    <div className="cardbox">
      <h2 style={{textAlign: 'center'}}>Adventures Joined</h2>
      <div className="cards">
      {loading}
      {going}
      </div>
      <h2 style={{textAlign: 'center'}}>Adventures Created</h2>
      <div className="cards">
      {loading}
      {hosting}
      </div>
    </div>
  )
}
export default profilecard;