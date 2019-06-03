import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import "./home.css";

class Home extends Component {

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

    // imagePicker(id) {
    //     this.setState({slideIndex: id})
    // }

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

    render() {
        return (
            <Container classes="bg-light">
                <Row>
                    <Col size="md-9 border-bottom border-right border-secondary">
                        <h1>Philadelphia Dragon Boat Association</h1>
                        <h3>Established 1983</h3>
                        <p>Welcome to the website of the oldest and most successful dragonboat team in the United States. If interested in joining, please head to our <a href="/Contact">Contact</a> page.</p>
                    </Col>
                    <Col size="md-3" classes="text-center border-bottom border-secondary">
                        <h3 className="border-bottom border-secondary">Our Sponsors</h3>
                        <img className="sponsor" alt="US Army" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/US_Army_logo.svg/767px-US_Army_logo.svg.png"/>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6 border-right border-dark text-center">
                        <div className="fb-page py-3" data-href="https://www.facebook.com/phillydragonboat" data-tabs="timeline" data-width="500" data-height="400" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/phillydragonboat" className="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/phillydragonboat">Facebook</a>
                            </blockquote>
                        </div>
                    </Col>
                    <Col size="md-6 text-center">
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
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;