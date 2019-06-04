import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import EmailForm from "../components/EmailForm";

class Home extends Component {
   
    render() {
        return (
            <Container classes="bg-light my-3 border border-dark">
                <Row classes="border-bottom border-dark">
                    <Col size="md-12" classes="text-left">
                        <h2 className="border-bottom border-secondary">Contact Us</h2>
                        <h6>Send us a message if you are interested in joining or trying out!</h6>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6" classes="border-right border-dark">
                        <h2>Contact the Main Team</h2>
                        <EmailForm

                        />
                    </Col>
                    <Col size="md-6">
                        <h2>Contact the Youth Team</h2>
                        <EmailForm

                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;