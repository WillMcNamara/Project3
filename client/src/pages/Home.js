import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import "./home.css";

class Home extends Component {

    state = {
        images: [
            {
                id: 1,
                alt: "pic1",
                src: "https://scontent.fphl2-1.fna.fbcdn.net/v/t31.0-8/21762560_1796407503721449_694293922731881520_o.jpg?_nc_cat=107&_nc_ht=scontent.fphl2-1.fna&oh=4f13d4b1234000ed5b1bdbac35e6a358&oe=5D98DBF6",
            },            
            {
                id: 2,
                alt: "pic2",
                src: "https://scontent.fphl2-3.fna.fbcdn.net/v/t1.0-9/22195932_1809385222423677_3565885577271469442_n.jpg?_nc_cat=109&_nc_ht=scontent.fphl2-3.fna&oh=e520b901b1c7579cac5948d0ea91112a&oe=5D9E5675",
            },
            {
                id: 3,
                alt: "pic3",
                src: "https://scontent.fphl2-1.fna.fbcdn.net/v/t1.0-9/28280072_1970724582956406_7613774869923665055_n.jpg?_nc_cat=107&_nc_ht=scontent.fphl2-1.fna&oh=f9f6fed60bd3d22edce2e22f7f9bde5c&oe=5D88317A",
            },
            {
                id: 4,
                alt: "pic4",
                src: "https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-9/13076768_1279374188758119_6972669152479570870_n.jpg?_nc_cat=108&_nc_ht=scontent.fphl2-4.fna&oh=e82f5cb95a2f8b171e7fd28b2c9e4c9f&oe=5D8CF085",
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
            <Container classes="my-3 border border-dark bg-light">
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
                        <img className="slides mt-3" alt={this.state.images[this.state.slideIndex].alt} src={this.state.images[this.state.slideIndex].src} key={this.state.images[this.state.slideIndex].id}/>
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