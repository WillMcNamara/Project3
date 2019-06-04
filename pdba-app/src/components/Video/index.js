import React, {Component} from "react";
// import "./style.css";

class Video extends Component {

    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <iframe width="420" height="315" src={this.props.src}/>
            </div>
        )
    }
}

export default Video;