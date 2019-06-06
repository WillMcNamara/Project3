import React, {Component} from "react";
import {Col, Row} from "../grid";
import "./style.css";

function Story({ title, author, image, synopsis, id, Button}){

    return(
        <Row classes="pt-2">
            <Col size="md-4" classes="news-row">
                <img className="news-img" src={image}/>
            </Col>
            <Col size="md-8" classes="news-row">
                <a href={`/Article/${id}`}>
                    <h4 className="story-title">{title}</h4>
                </a>
                <Button />
                <h5 className="story-author">{author}</h5>
                <p className="story-text">{synopsis}</p>
            </Col>
        </Row>
    )
}

export default Story;