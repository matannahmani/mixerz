import React, { Component } from 'react'
import { Swipeable } from 'react-deck-swiper';

class Swipecard extends Component {      

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
        images = <img key={0} className="images img-active" src="https://www.pngkey.com/png/full/21-213224_unknown-person-icon-png-download.png"/>;
        return (
            <Swipeable onSwipe={this.props.handleOnSwipe}>
            <div id="person-card" className="swipe-card">
                <div className="card-images">
                    {images}
                    <span id="counter"></span>
                </div>
                <div className="swipe-descp">
                    <h2><span className="iconify" data-icon="wpf:name" data-inline="false"></span>{this.props.name} , {this.props.age}</h2>
                    <h2><span className="iconify" data-icon="uil:favorite" data-inline="false"></span>{this.props.nickname}</h2>
                    <h3><span className="iconify" data-icon="fa-solid:location-arrow" data-inline="false"></span>{this.props.location}</h3>
                    <div className="desc-text">
                        <p>{this.props.descp}</p>
                    </div>
                    <div className="match-buttons">
                        <button onClick={() => this.props.result(true)} id="yes"><span className="iconify" data-icon="dashicons:yes" data-inline="false"></span></button>
                        <button onClick={() => this.props.result(false)} id="no"><span className="iconify" data-icon="dashicons:no" data-inline="false"></span></button>
                    </div>
                </div>
            </div>
            </Swipeable>
        )
    }
}
export default Swipecard;
