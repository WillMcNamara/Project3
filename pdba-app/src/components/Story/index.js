import React, {Component} from "react";
import {Col, Row} from "../grid";
import "./style.css";

class Story extends Component {

    render() {
        console.log(this.props)
        return(
            <Row classes="pt-2">
                <Col size="md-4" classes="news-row">
                    <img className="news-img" src={this.props.image}/>
                </Col>
                <Col size="md-8" classes="news-row">
                    <h4 className="story-title">{this.props.title}</h4>
                    <h5 className="story-author">{this.props.author}</h5>
                    <p className="story-text">{this.props.synopsis}</p>
                </Col>
            </Row>
        )
    }
}

export default Story;