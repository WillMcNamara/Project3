import React, { Component } from "react";
import {Container} from "../components/grid";
import "./nomatch.css";

class Home extends Component {
    render() {
        return (
            <Container classes="fill-page text-center bg-white my-3 border border-dark">
                <br/>
                <br/>
                <h1>The page you were looking for does not exist.</h1>
                <h1>:(</h1>
            </Container>
        )
    }
}

export default Home;