import React, {Component, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Navbar from './navbar'
import Banner from './banner'
import Footer from './footer'
import Cardbox from './cardbox'

class Index extends Component{
    state= {
        loading: true,
        today: null,
        tomorrow: null
    }

    load = async () =>{
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
        let ipcords;
        await $.getJSON('http://ip-api.com/json?callback=?', function(data) { ipcords = [data.lat,data.lon] });
        // navigator.geolocation.getCurrentPosition((pos) => console.log(`Your current position is: ${pos.coords}`), (err) =>   console.warn(`ERROR(${err.code}): ${err.message}`), options);
        let response = await fetch(`${location.origin}/eventapi/?lat=${ipcords[0]}&long=${ipcords[1]}`);
        let data
        data = await response.json().catch(() => {
            alert('failed');
            this.setState({loading: false})
        });
        data.today.code === 200 ? this.setState({today: data.today.events}) : this.setState({today: 'Empty'})
        data.tomorrow.code === 200 ? this.setState({tomorrow: data.tomorrow.events}) : this.setState({tomorrow: 'Empty'})
        this.setState({loading: false});
        console.log(this.state);
    }
    componentDidMount() {
        this.load();
    }
    render () {
        return (
            <div>
                {/* <Navbar/> */}
                {/* {loading} */}
                <Banner/>
                <Cardbox today={this.state.today} tomorrow={this.state.tomorrow} isloading={this.state.loading}/>
                <Footer/>
            </div>
        )
    }
}
export default Index;
