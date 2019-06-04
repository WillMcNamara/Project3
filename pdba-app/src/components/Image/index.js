import React, {Component} from "react";
import "./style.css";

class Image extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h4>{this.props.title}</h4>
                <img className="gal-img" alt={this.props.title} src={this.props.src}/>
            </div>
        )
    }
}

export default Image;