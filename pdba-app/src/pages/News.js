import React, { Component } from "react";
import {Container} from "../components/grid";
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
            }
        ]
    }

    render() {
        console.log(this.state.stories)
        return (
            <Container>
                {this.state.stories.map(story => (
                    console.log(story),
                    <Story
                        key={story.id}
                        title={story.title}
                        author={story.author}
                        synopsis={story.synopsis}
                        image={story.image}
                    />
                ))}

            </Container>
        )
    }
}

export default Home;