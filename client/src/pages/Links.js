import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid"

class Home extends Component {

    state = {
        links: [
            {
                id: 1,
                description: "The website of our annual race, the Independence Dragon Boat Regatta",
                src: "https://www.grunsports.com/db/idbr/index.cfm"
            },
            {
                id: 2,
                description: "United States Dragon Boat Federation",
                src: "https://www.usdbf.org/"
            },
            {
                id: 3,
                description: "International Dragon Boat Federation",
                src: "https://www.dragonboat.sport/"
            },
            {
                id: 4,
                description: "Rules & Regulations",
                src: "https://www.dragonboat.sport/docs"
            },
            {
                id: 5,
                description: "Our Online Store",
                src: "https://philadelphiadragonboatassociation.mysimplestore.com/"
            },
            {
                id: 6,
                description: "Download and Sign Waviers",
                src: "#"
            }
        ]
    }

    render() {
        return (
            <Container classes="bg-white my-3 border border-dark">
                {this.state.links.map( link => {
                    return(
                        <Row>
                            <Col size="md-12" classes="pb-4">
                                <p className="my-0">{link.description}</p>
                                <a href={link.src}>{link.src}</a>
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        )
    }
}

export default Home;