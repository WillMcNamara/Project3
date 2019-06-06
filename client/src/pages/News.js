import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import Story from "../components/Story";
import API from "../utils/API";

class Home extends Component {

    state = {
        stories: []
    }

    componentDidMount(){
        this.grabNews();
    }

    grabNews = () => {
        API.getNews()
            .then(res =>
                this.setState({
                    stories: res.data
                })
            )
            .catch(() =>
                this.setState({
                    stories: []
                })
            );
    };

    makeifyNews = (data) => {
        API.postNews({
            title: data.title,
            author: data.author,
            synopsis: data.synopsis,
            text: data.text,
            image: data.image
        })
            .then(() => {
                this.grabNews();
            })          
    }

    deleteNews = id => {
        API.deleteNewsId(id).then(() => this.grabNews())
    }

    render() {
        return (
            <Container classes="bg-white my-3 border border-dark">
                <Row>
                    <Col size="md-4">
                        <h2 className="border-bottom border-light">Latest News</h2>
                    </Col>
                    <Col size="md-8">
                    </Col>
                </Row>
                {this.state.stories.map(story => (
                    <Story
                        key={story._id}
                        title={story.title}
                        author={story.author}
                        synopsis={story.synopsis}
                        image={story.image}
                        Button={() => (
                            <button
                                onClick={() => this.deleteNews(story._id)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        )}
                    />
                ))}
                <Row>
                    <Col size="md-12" classes="text-center font-small">
                        <a href="#">News Archive</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;