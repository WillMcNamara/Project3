import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "./style.css";

class Navb extends Component {

    render() {
        return (
            <Navbar className="border-bottom border-dark" collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand href="/">PDBA</Navbar.Brand>
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