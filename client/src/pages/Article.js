import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import API from "../utils/API";

class Article extends Component {

    state = {
        story: {
            title: "hi",
            author: "me",
            synopsis: "uvhbijnok"
        }
    }

    componentDidMount(){
        this.loadArticle();
    }

    loadArticle = () => {
        const id = this.props.location.pathname.split("/")[2];
        console.log(id);
        API.getNewsId(id).then(res => this.setState({story: res.data}))
    } 

    render() {
        return (
            <Container classes="bg-white my-3 border border-dark">
                <Row>
                    <Col size="md-12" classes="text-center"><h4>{this.state.story.title}</h4></Col>   
                    <Col size="md-12"><h5>{this.state.story.author}</h5></Col>
                    <Col size="md-12"><p>{this.state.story.text}</p></Col>
                </Row>
            </Container>
        )
    }
}

export default Article;

