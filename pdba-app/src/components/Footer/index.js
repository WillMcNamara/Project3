import React, {Component} from "react";
import {Container, Row, Col} from "../grid";

class Footer extends Component {
    state = {}

    render() {
        return (
            <footer className="font-small pt-2 bg-danger">
                <Container>
                    <Row>
                        <Col size="md-4">
                            <div className="footer-links py-2 text-center">
                                <a className="px-2" href="#">spons1</a>
                                <a className="px-2" href="#">spons2</a>
                                <a className="px-2" href="#">spons3</a>
                            </div>
                        </Col>
                        <Col size="md-4">
                            <div className="footer-copyright text-center py-1">Philadelphia Dragon Boat Association © All Rights Reserved
                            </div>
                        </Col>
                        <Col size="md-4">
                            <div className="footer-links py-2 text-center">
                                <a className="px-2" href="#">fb</a>
                                <a className="px-2" href="#">inst</a>
                                <a className="px-2" href="#">twitter</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;