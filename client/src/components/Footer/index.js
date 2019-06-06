import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Row, Col} from "../grid";
import "./style.css";
import API from "../../utils/API";

class Footer extends Component {

    // handleShow = this.handleShow.bind(this);
    // handleClose = this.handleClose.bind(this);

    state = {
      show: false,
      user: "",
      password: "",
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleClose = () => this.setState({ show: false });

    handleShow = () => this.setState({ show: true });

    login = e => {
        e.preventDefault();
        API.login({user: this.state.user}).then(res => {
            console.log(res.data);
            if (res.data.length === 0) {
                return console.log("no user");
            } 
            else if (this.state.password === res.data[0].password) {
                window.localStorage.setItem("user", res.data[0].user);
                console.log(`logged in as ${res.data[0].user}`)
            }
            else {
                console.log("username and password dont match")
            }
        })
    }

    signUp = e => {
        e.preventDefault();
        API.signup({
            user: this.state.user, 
            password: this.state.password
            }).then(res => {
                window.localStorage.setItem("user", res.data.user);
        })
    }

    render() {
        return (
            <footer className="pt-2 small border-top border-dark">

                <div className="container pb-0">
                    <Row>
                        <Col size="md-3">
                            <div className="footer-links text-center">
                                <Button variant="primary" onClick={this.handleShow}>
                                Login
                                </Button>
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Login</Modal.Title>
                                    </Modal.Header>
                                    <form action="#">
                                        <Modal.Body>
                                                <div className="form-group">
                                                    <label htmlFor="user">Name:</label>
                                                    <input onChange={this.handleInputChange} className="form-control" type="text" value={this.state.user} id="user" name="user" placeholder="Your name..."/>
                                                    
                                                    <label htmlFor="password">Password:</label>
                                                    <input onChange={this.handleInputChange} className="form-control" type="password" value={this.state.password} id="password" name="password" placeholder="Your password..."/>
                                                </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="success" onClick={this.signUp}>
                                                Sign-up
                                            </Button>
                                            <Button variant="primary" onClick={this.login}>
                                                Login
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </Modal>
                            </div>
                        </Col>
                        <Col size="md-6">
                            <div className="footer-copyright text-white text-center py-2">Philadelphia Dragon Boat Association © All Rights Reserved
                            </div>
                        </Col>
                        <Col size="md-3">
                            <div className="footer-links py-1 text-center">
                                <a className="px-2" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/phillydragonboat/"><img className="footer-img" alt="facebook" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png"/></a>
                                <a className="px-2" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/phillydragonboat/?hl=en"><img className="footer-img" alt="instagram" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png"/></a>
                                <a className="px-2" target="_blank" rel="noopener noreferrer" href="https://twitter.com/phillydragonbt"><img className="footer-img" alt="twitter" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"/></a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}

export default Footer;