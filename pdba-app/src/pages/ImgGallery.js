import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import Image from "../components/Image";

class ImgGallery extends Component {

    state = {
        images: [
            {
                id: 0,
                title: "0",
                src: "https://www.w3schools.com/w3css/img_nature_wide.jpg"
            },
            {
                id: 1,
                title: "1",
                src: "https://www.w3schools.com/w3css/img_snow_wide.jpg"
            },
            {
                id: 2,
                title: "2",
                src: "https://www.w3schools.com/w3css/img_nature_wide.jpg"
            },
            {
                id: 3,
                title: "3",
                src: "https://www.w3schools.com/w3css/img_snow_wide.jpg"
            },
            {
                id: 4,
                title: "4",
                src: "https://www.w3schools.com/w3css/img_nature_wide.jpg"
            },
            {
                id: 5,
                title: "5",
                src: "https://www.w3schools.com/w3css/img_snow_wide.jpg"
            }
        ]
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
                            id={this.state.images[i].id}
                            key={this.state.images[i].id}
                            title={this.state.images[i].title}
                            src={this.state.images[i].src}
                        />
                    </Col> 
                    
                    <Col size="md-6" classes="text-center">
                        <Image
                            id={this.state.images[i+1].id}
                            key={this.state.images[i+1].id}
                            title={this.state.images[i+1].title}
                            src={this.state.images[i+1].src}
                        />
                    </Col>
                </Row>
            )
        }

        return (
            <Container>
                {imageRows}
            </Container>
        )
    }
}

export default ImgGallery;