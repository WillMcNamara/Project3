import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import Video from "../components/Video";

class Home extends Component {

        state = {
            videos: [
                {
                    id: 0,
                    title: "0",
                    src: "https://www.youtube.com/embed/tgbNymZ7vqY"
                },
                {
                    id: 1,
                    title: "1",
                    src: "https://www.youtube.com/embed/tgbNymZ7vqY"
                },
                {
                    id: 2,
                    title: "2",
                    src: "https://www.youtube.com/embed/tgbNymZ7vqY"
                },
                {
                    id: 3,
                    title: "3",
                    src: "https://www.youtube.com/embed/tgbNymZ7vqY"
                },
                {
                    id: 4,
                    title: "4",
                    src: "https://www.youtube.com/embed/tgbNymZ7vqY"
                },
                {
                    id: 5,
                    title: "5",
                    src: "https://www.youtube.com/embed/tgbNymZ7vqY"
                }
            ]
        }

        render() {
            
            const vidRows = [];
            //format videos into rows
            for (let i = 0; i < this.state.videos.length; i += 2) {
                vidRows.push(
                    <Row
                    key={i}
                >
                    <Col size="md-6" classes="text-center">
                        <Video
                            id={this.state.videos[i].id}
                            key={this.state.videos[i].id}
                            title={this.state.videos[i].title}
                            src={this.state.videos[i].src}
                        />
                    </Col> 
                    
                    <Col size="md-6" classes="text-center">
                        <Video
                            id={this.state.videos[i+1].id}
                            key={this.state.videos[i+1].id}
                            title={this.state.videos[i+1].title}
                            src={this.state.videos[i+1].src}
                        />
                    </Col>
                </Row>
                )
            }
            return (
                <Container classes="my-3 border-dark border bg-light">
                    {vidRows}
                </Container>
            )
    }
}

export default Home;