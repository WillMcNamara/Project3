import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid"

class Home extends Component {

    state = {
        links: [
            {
                id: 1,
                description: "this is a link",
                src: "www.gotothislink.com"
            },
            {
                id: 1,
                description: "this is a link",
                src: "www.gotothislink.com"
            },
            {
                id: 1,
                description: "this is a link",
                src: "www.gotothislink.com"
            },
            {
                id: 1,
                description: "this is a link",
                src: "www.gotothislink.com"
            },
            {
                id: 1,
                description: "this is a link",
                src: "www.gotothislink.com"
            },
        ]
    }

    render() {
        return (
            <Container classes="bg-white my-3 border border-dark">
                {this.state.links.map( link => {
                    return(
                        <Row>
                            <Col size="md-12">
                                <p>{link.description}</p>
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