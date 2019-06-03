import React, {Component} from "react";
import {Container, Row, Col} from "../grid";

class ImgSlide extends Component {
    
    state = {
        images: [
            {
                id: 1,
                alt: "pic1",
                src: "https://www.w3schools.com/w3css/img_nature_wide.jpg",
            },            {
                id: 2,
                alt: "pic2",
                src: "https://www.w3schools.com/w3css/img_snow_wide.jpg",

            },
        ],
        slideIndex: 0
    }

    prev = e => {
        e.preventDefault();
        if (this.state.slideIndex > 0){
            this.setState({slideIndex: this.state.slideIndex - 1})
        }
    }

    next = e => {
        e.preventDefault();
        if (this.state.slideIndex < this.state.images.length - 1) {
            this.setState({slideIndex: this.state.slideIndex + 1})
        }
    }

    // imagePicker = e => {
    //     e.preventDefault();
    //     this.setState({slideIndex: })
    // }

    render(){
        return(
            <div>
                <img className="slides" alt={this.state.images[this.state.slideIndex].alt} src={this.state.images[this.state.slideIndex].src} key={this.state.images[this.state.slideIndex].id}/>
                <div>
                    <div>
                        <button onClick={this.prev}>❮ Prev</button>
                        <button onClick={this.next}>Next ❯</button>
                    </div>
                    {/* {this.state.images.map(image => (
                        <button key={image.id} data-value={image.id} onClick={this.imagePicker}>{image.id}</button>
                    ))} */}
                </div>
            </div>
        )
    }
}

export default ImgSlide