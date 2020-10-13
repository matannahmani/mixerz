import React, {Component, useState, useEffect} from 'react'
import Banner from './banner'
import Cardbox from './cardbox'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Index extends Component{
    state= {
        loading: true,
        today: null,
        tomorrow: null,
        week: null,
        price: 0,
        distance: 5,
        words: ''
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
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        let response = await fetch(`${location.origin}/eventapi/?lat=${ipcords[0]}&long=${ipcords[1]}&distance=${this.state.distance}&price=${this.state.price}&words=${this.state.words}`,
        {headers: {
            'Authorization': 'Bearer TOKEN',
            'X-CSRF-Token': csrf
          }});
        let data
        data = await response.json().catch(() => {
            toast.error("ERROR\nPlease Try Later", {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
            this.setState({loading: false})
        });
        data.today.code === 200 ? this.setState({today: data.today.events}) : this.setState({today: 'Empty'})
        data.tomorrow.code === 200 ? this.setState({tomorrow: data.tomorrow.events}) : this.setState({tomorrow: 'Empty'})
        data.week.code === 200 ? this.setState({week: data.week.events}) : this.setState({week: 'Empty'})
        this.setState({loading: false});
    }
    componentDidMount() {
        this.load();
    }
    milesHandler(e) {
        const miles = document.getElementById('miles');
        const items = document.querySelectorAll('.opt');
        items.forEach ((item) =>
        {
            if (item.classList.contains ('active')) item.classList.remove('active')
        });
        e.target.classList.add('active');
        miles.innerText = `Within ${e.target.innerText}..`
        if ((/\d+/).test(miles.innerText)){
            this.setState({distance: parseInt(miles.innerText.match(/\d+/)[0])})
        }else{
        console.log('i am here')
        this.setState({distance: 0})
        }
    }
    eventTypeHandler(e) {
        const buttons = document.querySelector('.buttons')
        buttons.childNodes.forEach ( (btn) => btn.classList.remove('active'));
        buttons.childNodes[0] == e ? this.setState({price: 0}) : this.setState({price: 1})
        e.target.classList.add('active')
    }
    fetchDataHandler() {
        const input = document.querySelector('.form').childNodes[0];
        this.setState({words: input.value,loading: true})
        this.load();
        // if (input.value.length > 4 && input.value.length < 25)
        //     {
        //     this.setState({words: input.value,loading: true})
        //     this.load();
        //     }
        // else
        //     toast.warn("Please write more than 4 letters", {
        //     position: "top-right",
        //     autoClose: 2500,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true
        //     });
    }
    render () {
        return (
            <div>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl pauseOnVisibilityChange draggable pauseOnHover/>
                <Banner fetchData={() => this.fetchDataHandler()} eventHandler={(e) => this.eventTypeHandler(e)} milesHandler={(e) => this.milesHandler(e)}/>
                <Cardbox week={this.state.week} today={this.state.today} tomorrow={this.state.tomorrow} isloading={this.state.loading}/>
            </div>
        )
    }
}
export default Index;
