import React, { Component } from "react";
import {Container, Row, Col} from "../components/grid";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Story from "../components/Story";
import API from "../utils/API";

class Home extends Component {

    state = {
        stories: [],
        show: false,
        perms: "-1",
        title: "",
        author: "",
        text: "",
        image: "",
        synopsis: ""
    };

    componentDidMount(){
        this.grabNews();
        this.checkperms();
    };

    //standard form input
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    //close modal
    handleClose = () => this.setState({ show: false });
    //open modal
    handleShow = () => this.setState({ show: true });

    //check localstorage for perms
    checkperms = () => {
        if (window.localStorage.getItem("perms") !== null){
            this.setState({perms: window.localStorage.getItem("perms")});
        };
    };

    //populate page with news
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

    //post a new news post
    makeifyNews = () => {
        API.postNews({
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis,
            image: this.state.image,
            text: this.state.text
        })
            .then(() => {
                this.grabNews();
            });       
    };

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
                    <Col size="md-8" classes="text-center">
                        {this.state.perms >= 0 ? <button onClick={this.handleShow} className="btn btn-success my-2">New Post</button> : ""}
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>New Post</Modal.Title>
                            </Modal.Header>
                            <form action="#">
                                <Modal.Body>
                                        <div className="form-group">
                                            <label htmlFor="title">Title:</label>
                                            <input onChange={this.handleInputChange} className="form-control" type="text" value={this.state.title} id="title" name="title" placeholder="Title"/>
                                            
                                            <label htmlFor="author">Author:</label>
                                            <input onChange={this.handleInputChange} className="form-control" type="text" value={this.state.author} id="author" name="author" placeholder="Author"/>

                                            <label htmlFor="synopsis">Synopsis:</label>
                                            <input onChange={this.handleInputChange} className="form-control" type="text" value={this.state.synopsis} id="synopsis" name="synopsis" placeholder="Synopsis..."/>
                            
                                            <label htmlFor="image">Image:</label>
                                            <input onChange={this.handleInputChange} className="form-control" type="text" value={this.state.image} id="image" name="image" placeholder="Post link to image here (can't uploaded directly yet)"/>
                                        
                                            <label htmlFor="text">Text:</label>
                                            <textarea rows="15" onChange={this.handleInputChange} className="form-control" type="text" value={this.state.text} id="text" name="text" placeholder="Text"/>
                                        </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={this.makeifyNews}>
                                        Post
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Modal>
                    </Col>
                </Row>
                {this.state.stories.map(story => (
                    <Story
                        key={story._id}
                        title={story.title}
                        author={story.author}
                        synopsis={story.synopsis}
                        image={story.image}
                        id={story._id}
                        Button={this.state.perms >= 0 ? () => (
                            <button
                                onClick={() => this.deleteNews(story._id)}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        ) : ""}
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