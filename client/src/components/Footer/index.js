import React, {Component} from "react";
import {Row, Col} from "../grid";
import "./style.css";

class Footer extends Component {

    render() {
        return (
            <footer className="pt-2 small border-top border-dark">
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
                            <div className="footer-copyright text-white text-center py-2">Philadelphia Dragon Boat Association © All Rights Reserved
                            </div>
                        </Col>
                        <Col size="md-3">
                            <div className="footer-links py-1 text-center">
                                <a className="px-2" href="#"><img className="footer-img" alt="facebook" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png"/></a>
                                <a className="px-2" href="#"><img className="footer-img" alt="instagram" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png"/></a>
                                <a className="px-2" href="#"><img className="footer-img" alt="twitter" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"/></a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}

export default Footer;