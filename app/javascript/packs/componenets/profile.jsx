import React, { Component } from 'react'
import ProfileCards from './profilecards'

class Profile extends Component{
    state= {
        loading: true,
        today: null,
        going: null,
        hosting: null,
    }


    render() {
        return(
            <div>
                <div className="profile-head">
                    <img src="https://kitt.lewagon.com/placeholder/users/ssaunier" alt="profile"/>
                    <h1>Matan</h1>
                    <h2>Ramen Matan, 18</h2>
                    <h2>Seoul South Korea</h2>
                    <div className="profile-tags">
                        <li>
                            <i>Hardstyle</i>
                            <i>EDM</i>
                            <i>TRANCE</i>
                            <i>K-POP</i>
                            <i>ROCK</i>
                        </li>
                    </div>
                    <div className="bio">
                        <h3>BIO:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor numquam vero quod praesentium minima veritatis pariatur ex quibusdam impedit quisquam dolore.</p>
                        <ProfileCards events={this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;