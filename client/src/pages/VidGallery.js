import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import Video from "../components/Video";
import API from "../utils/API";

class Home extends Component {

    state = {
        videos: []
    }

    componentDidMount(){
        this.loadVid()
    }

    loadVid = () => {
        API.getVid()
        .then(res =>
            this.setState({
                videos: res.data
            })
        )
        .catch(() =>
            this.setState({
                videos: []
            })
        );
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
                        id={this.state.videos[i]._id}
                        key={this.state.videos[i]._id}
                        title={this.state.videos[i].title}
                        src={this.state.videos[i].link}
                    />
                </Col> 
                
                <Col size="md-6" classes="text-center">
                    <Video
                        id={this.state.videos[i+1]._id}
                        key={this.state.videos[i+1]._id}
                        title={this.state.videos[i+1].title}
                        src={this.state.videos[i+1].link}
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