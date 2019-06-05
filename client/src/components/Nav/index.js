import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "./style.css";

class Navb extends Component {

    render() {
        return (
            <Navbar className="navthegator border-bottom border-dark" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/"><img className="logo" src="http://nebula.wsimg.com/9ded58bed73da13862f641e537dfad90?AccessKeyId=C5BFFEBD8C6E0486FB19&disposition=0&alloworigin=1"/>PDBA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/News">News</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown className="dropDown" title="Galleries" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/ImgGallery">Image Gallery</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/VidGallery">Video Gallery</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="dropDown" title="Calendars" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/PracticeCal">Team Calendar</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/BoatCal">Boat Singout</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Links">Other Useful Links</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>     
        );
    }
}

export default Navb;