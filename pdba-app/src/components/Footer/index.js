import React, {Component} from "react";
import {Container, Row, Col} from "../grid";
import "./style.css";

class Footer extends Component {
    state = {}

    render() {
        return (
            <footer className="pt-2 small bg-danger">
                <div className="container pb-0">
                    <Row>
                        <Col size="md-3">
                            <div className="footer-links py-2 text-center">
                                <a className="px-2" href="#">spons1</a>
                                <a className="px-2" href="#">spons2</a>
                                <a className="px-2" href="#">spons3</a>
                            </div>
                        </Col>
                        <Col size="md-6">
                            <div className="footer-copyright text-center py-2">Philadelphia Dragon Boat Association © All Rights Reserved
                            </div>
                        </Col>
                        <Col size="md-3">
                            <div className="footer-links py-2 text-center">
                                <a className="px-2" href="#">fb</a>
                                <a className="px-2" href="#">inst</a>
                                <a className="px-2" href="#">twitter</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}

export default Footer;