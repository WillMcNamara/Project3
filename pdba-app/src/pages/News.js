import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import Story from "../components/Story";

class Home extends Component {

    state = {
        stories: [
            {
                id: 1,
                title: "Post 1",
                author: "Will M",
                synopsis: "Things happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happened ",
                image: "https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
            },
            {
                id: 1,
                title: "Post 1",
                author: "Will M",
                synopsis: "Things happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happenedThings happened ",
                image: "https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg"
            }
        ]
    }

    render() {
        console.log(this.state.stories)
        return (
            <Container classes="bg-white border-left my-3 border-top border-right border-dark">
                <Row>
                    <Col size="md-4">
                        <h2 className="border-bottom border-light">Latest News</h2>
                    </Col>
                    <Col size="md-8">
                    </Col>
                </Row>
                {this.state.stories.map(story => (
                    <Story
                        key={story.id}
                        title={story.title}
                        author={story.author}
                        synopsis={story.synopsis}
                        image={story.image}
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