import React, { useState, Component } from 'react'
import Swipecard from './swipecard';
import { direction } from 'react-deck-swiper';
// import {useTransition, animated} from 'react-spring'
class Deck extends Component{
    data = [{
        images: ["https://i.dailymail.co.uk/i/pix/2015/11/18/20/2E92DB7E00000578-3324317-image-a-52_1447877890119.jpg","https://cms.qz.com/wp-content/uploads/2015/11/ap_467135219719.jpg?quality=75&strip=all&w=350&h=467&crop=1"],
        location: 'Seoul, South Korea',
        age: 18,
        descp: 'Hello its nice here look to find cool pepole',
        name: 'Matan',
        nickname: 'Mister Ramen',
        },
        {
            images: ["https://i.dailymail.co.uk/i/pix/2015/11/18/20/2E92DB7E00000578-3324317-image-a-52_1447877890119.jpg","https://cms.qz.com/wp-content/uploads/2015/11/ap_467135219719.jpg?quality=75&strip=all&w=350&h=467&crop=1"],
            location: 'Seoul, South Korea',
            age: 18,
            descp: 'Hello its nice here look to find cool pepole',
            name: 'Bob',
            nickname: 'Mister Ramen',
        },{
            images: null,
            location: 'Seoul, South Korea',
            age: 18,
            descp: 'Hello its nice here look to find cool pepole',
            name: 'Bob',
            nickname: 'Mister Ramen',

        }
    ]
    state = {
        data: this.data,
        counter: 0,
        isloading: true,
        person: this.data[0],
        oldperson: this.data[0]
    }
    handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
          // handle right swipe
          this.setState({oldperson: this.state.data[this.state.counter],counter: this.state.counter += 1,person: this.state.data[this.state.counter]})
          console.log('right');
          return;
        }
    
        if (swipeDirection === direction.LEFT) {
          // handle left swipe
          this.setState({oldperson: this.state.data[this.state.counter],counter: this.state.counter += 1,person: this.state.data[this.state.counter]})
          console.log('left');
          return;
        }
      }
      handleMatch = (result) => {
          console.log(result);
          this.setState({oldperson: this.state.data[this.state.counter],counter: this.state.counter += 1,person: this.state.data[this.state.counter]})
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
        let person,oldperson;
        if (this.state.person !=null) {
            oldperson = <Swipecard key={this.state.oldperson.key} age={this.state.oldperson.age} images={this.state.oldperson.images} descp={this.state.oldperson.descp} name={this.state.oldperson.name} location={this.state.oldperson.location} nickname={this.state.oldperson.nickname} result={this.handleMatch} handleOnSwipe={this.handleOnSwipe}/>;
            person = <Swipecard fadeThreshold={20} swipeThreshold={80} key={this.state.person.key} age={this.state.person.age} images={this.state.person.images} descp={this.state.person.descp} name={this.state.person.name} location={this.state.person.location} nickname={this.state.person.nickname} result={this.handleMatch} handleOnSwipe={this.handleOnSwipe}/>;
        }
        else{
            person = <h1>Come back later...</h1>
        }
        return (
            <div>
                {person}
            </div>
        )
    }
}
export default Deck;
        // // persons = this.state.data.map ((person) => <Swipecard/>);
        // persons = this.state.data.map((data) => <Swipecard
        // key={data.key}age={data.age} images={data.images} descp={data.descp} location={data.location} name={data.name} nickname={data.nickname} result={this.handleMatch} handleOnSwipe={this.handleOnSwipe}/>)
        // this.state.data.empty ? persons = <h2>No Pepole have been Found!</h2> : persons = this.state.data.map((data) => <Swipecard
        // key={data.key}age={data.age} images={data.images} descp={data.descp} location={data.location} name={data.name} nickname={data.nickname} result={this.handleMatch} handleOnSwipe={this.handleOnSwipe}
        // />);