import React, { Component } from 'react'
import Swipecard from './swipecard';
import { direction } from 'react-deck-swiper';

class Deck extends Component{
    state = {
        data: null,
        counter: 0,
        isloading: true
    }
    handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
          // handle right swipe
          console.log('right');
          return;
        }
    
        if (swipeDirection === direction.LEFT) {
          // handle left swipe
          console.log('left');
          return;
        }
      }
    load = async () => {
        let ipcords;
        await $.getJSON('http://ip-api.com/json?callback=?', function(data) { ipcords = [data.lat,data.lon] });
        let response = await fetch(`${location.origin}/matchapi/?lat=${ipcords[0]}&long=${ipcords[1]}`);
        let data
        data = await response.json().catch(() => {
            alert('failed');
            this.setState({loading: false})
        });
        data.code === 200 ? this.setState({data: data.users}) : this.setState({data: 'Empty'})
        this.setState({loading: false});
    }
    componentDidMount(){
        // this.load();
    }
    render () {

        return (
            // <Swipecard hello={"test"}/>
            <Swipecard images={["https://i.dailymail.co.uk/i/pix/2015/11/18/20/2E92DB7E00000578-3324317-image-a-52_1447877890119.jpg","https://cms.qz.com/wp-content/uploads/2015/11/ap_467135219719.jpg?quality=75&strip=all&w=350&h=467&crop=1"]} handleOnSwipe={this.handleOnSwipe} location="Seoul, South Korea" age={18} descp={"Trance and tech lover loves going to the gym and eating pizza ! i would like to meet cool pepole and hang out with like minded sp hit me up if you are looking to party! have a nice weekend lolololololo! niceeeeeeeeeeeeeeeeeeee!"} name={"Matan"} nickname={"Conor Matan"}/>
        )
    }
}
export default Deck;