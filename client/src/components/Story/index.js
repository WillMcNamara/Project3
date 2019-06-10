import React from "react";
import {Col, Row} from "../grid";
import "./style.css";

function Story({ title, author, image, synopsis, id, Button}){

    return(
        <Row classes="pt-2">
            <Col size="md-4" classes="news-row text-center py-3">
                <img className="news-img" alt={title} src={image}/>
            </Col>
            <Col size="md-8" classes="news-row">
                <a href={`/Article/${id}`}>
                    <h4 className="story-title">{title}</h4>
                </a>
                {Button ? <Button /> : ""}
                <h5 className="story-author">{author}</h5>
                <p className="story-text">{synopsis}</p>
            </Col>
        </Row>
    )
}

export default Story;