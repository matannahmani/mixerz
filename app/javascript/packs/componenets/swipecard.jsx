import React, { Component } from 'react'
import 'jquery-ui-dist/jquery-ui';

class Swipecard extends Component
{
    componentDidMount() {
            const cardimages = document.querySelector('.card-images');
            const images = document.querySelectorAll('.images');
            const counter = document.getElementById('counter');
            counter.innerText = `1/${images.length}`
            $(document).ready(function () {
                $( "#person-card" ).draggable();
            });
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
        return (
            <div id="person-card" className="swipe-card">
                <div className="card-images">
                    <img className="images img-active"src="https://cms.qz.com/wp-content/uploads/2015/11/ap_467135219719.jpg?quality=75&strip=all&w=350&h=467&crop=1"></img>
                    <img className="images" src="https://i.dailymail.co.uk/i/pix/2015/11/18/20/2E92DB7E00000578-3324317-image-a-52_1447877890119.jpg"></img>
                    <img className="images" src="https://i.insider.com/5b7314b8b354cd44148b4ccd?width=1100&format=jpeg&auto=webp"></img>
                    <span id="counter"></span>
                </div>
                <div className="swipe-descp">
                    <h2><span className="iconify" data-icon="wpf:name" data-inline="false"></span> Matan, 21</h2>
                    <h2><span className="iconify" data-icon="uil:favorite" data-inline="false"></span> Ramen Matan</h2>
                    <h3><span className="iconify" data-icon="fa-solid:location-arrow" data-inline="false"></span> Seoul, South Korea</h3>
                    <div className="desc-text">
                        <p>Trance and tech lover loves going to the gym and eating pizza ! i would like to meet cool pepole and hang out with like minded sp hit me up if you are looking to party! have a nice weekend lolololololo! niceeeeeeeeeeeeeeeeeeee!</p>
                    </div>
                    <div className="match-buttons">
                        <button id="yes"><span className="iconify" data-icon="dashicons:yes" data-inline="false"></span></button>
                        <button id="no"><span className="iconify" data-icon="dashicons:no" data-inline="false"></span></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Swipecard;
