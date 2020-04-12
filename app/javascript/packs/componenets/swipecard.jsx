import React, { Component } from 'react'
import { Swipeable } from 'react-deck-swiper';

class Swipecard extends Component {      
    constructor(props) {
        super(props);
        this.state = {
          isShow: true,
        };
      }
    componentDidMount() {
            const cardimages = document.querySelector('.card-images');
            const images = document.querySelectorAll('.images');
            const counter = document.getElementById('counter');
            counter.innerText = `1/${images.length}`
            const imgupdate = (flag) =>{
                for (const [index, image] of images.entries()) {
                    console.log(index);
                    console.log(image);
                    if (image.classList.contains("img-active") && images[index+flag] !== undefined){
                        image.classList.remove("img-active");
                        images[index+flag].classList.add("img-active");
                        (flag === 1) ? counter.innerText = `${index+2}/${images.length}` : counter.innerText = `${index}/${images.length}`
                        break;
                    }
              }
            }
            cardimages.addEventListener(('click'), (event) => {
                (event.clientX > (window.screen.width * 0.48)) ? imgupdate(1) : imgupdate(-1)
            });
        }
    render () {
        let images;
        console.log(this)
        this.props.images !== null ?
        images = this.props.images.map ((image,index) => index === 0 ?
        <img key={index} className="images img-active" src={image}/> : <img key={index} className="images" src={image}/>)
        :
        images = <img key={index} className="images img-active" src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"/>;
        return (
            <Swipeable onSwipe={this.props.handleOnSwipe}>
            <div id="person-card" className="swipe-card">
                <div className="card-images">
                    {/* <img className="images img-active"src="https://cms.qz.com/wp-content/uploads/2015/11/ap_467135219719.jpg?quality=75&strip=all&w=350&h=467&crop=1"></img>
                    <img className="images" src="https://i.dailymail.co.uk/i/pix/2015/11/18/20/2E92DB7E00000578-3324317-image-a-52_1447877890119.jpg"></img>
                    <img className="images" src="https://i.insider.com/5b7314b8b354cd44148b4ccd?width=1100&format=jpeg&auto=webp"></img> */}
                    {images}
                    <span id="counter"></span>
                </div>
                <div className="swipe-descp">
                    <h2><span className="iconify" data-icon="wpf:name" data-inline="false"></span>{this.props.name} , {this.props.age}</h2>
                    <h2><span className="iconify" data-icon="uil:favorite" data-inline="false"></span>{this.props.nickname}</h2>
                    <h3><span className="iconify" data-icon="fa-solid:location-arrow" data-inline="false"></span>{this.props.location}</h3>
                    <div className="desc-text">
                        <p>{this.props.descp}</p>
                        {/* <p>Trance and tech lover loves going to the gym and eating pizza ! i would like to meet cool pepole and hang out with like minded sp hit me up if you are looking to party! have a nice weekend lolololololo! niceeeeeeeeeeeeeeeeeeee!</p> */}
                    </div>
                    <div className="match-buttons">
                        <button id="yes"><span className="iconify" data-icon="dashicons:yes" data-inline="false"></span></button>
                        <button id="no"><span className="iconify" data-icon="dashicons:no" data-inline="false"></span></button>
                    </div>
                </div>
            </div>
            </Swipeable>
        )
    }
}
export default Swipecard;
