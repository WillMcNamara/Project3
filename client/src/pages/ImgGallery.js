import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import Image from "../components/Image";
import API from "../utils/API";

class ImgGallery extends Component {

    state = {
        images: []
    }

    componentDidMount(){
        this.loadImg()
    }

    loadImg = () => {
        API.getImg()
        .then(res =>
            this.setState({
                images: res.data
            })
        )
        .catch(() =>
            this.setState({
                images: []
            })
        );
    }

    render() {
        const imageRows = [];
        // format the images into rows
        for (let i = 0; i < this.state.images.length; i += 2) {
            imageRows.push(
                <Row
                    key={i}
                >
                    <Col size="md-6" classes="text-center">
                        <Image
                            id={this.state.images[i]._id}
                            key={this.state.images[i]._id}
                            title={this.state.images[i].title}
                            src={this.state.images[i].link}
                        />
                    </Col> 
                    
                    <Col size="md-6" classes="text-center">
                        <Image
                            id={this.state.images[i+1]._id}
                            key={this.state.images[i+1]._id}
                            title={this.state.images[i+1].title}
                            src={this.state.images[i+1].link}
                        />
                    </Col>
                </Row>
            )
        }

        return (
            <Container classes="my-3 border border-dark bg-light">
                {imageRows}
            </Container>
        )
    }
}

export default ImgGallery;