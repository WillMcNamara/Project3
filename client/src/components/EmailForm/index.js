import React, {Component} from "react";
import "./style.css";
import API from "../../utils/API";

class EmailForm extends Component {

    state = {
        name: "",
        email: "",
        age: "",
        gender: "",
        message: "",
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    emailify = e => {
        e.preventDefault();
        const message = `Name: ${this.state.name} Age: ${this.state.age} Gender: ${this.state.gender}\n Email: ${this.state.email}\n${this.state.message}`
        const info = {
            to: "wmcna97@gmail.com",
            subject: "PDBA Contact Message",
            message: message
        }
        API.email(info);
    }

    render() {
        return(
            <form action="#">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" onChange={this.handleInputChange} value={this.state.name} type="text" id="name" name="name" placeholder="Your name..."/>
                    
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" onChange={this.handleInputChange} value={this.state.email} type="email" id="email" name="email" placeholder="Your email..."/>

                    <label htmlFor="age">Age:</label>
                    <input className="form-control" onChange={this.handleInputChange} value={this.state.age} type="number" id="age" name="age" placeholder="Your age..."/>

                    <label htmlFor="gender">Gender:</label>
                    <select className="form-control" onChange={this.handleInputChange} value={this.state.gender} id="gender" name="gender" placeholder="Your gender...">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>

                    <label htmlFor="message">Message:</label>
                    <textarea rows="5" className="bigolthinger form-control" onChange={this.handleInputChange} value={this.state.message} type="text" id="message" name="message" placeholder="Your message..."/>
                </div>
                <button onClick={this.emailify} className="btn btn-primary mb-2">Submit</button>
            </form>
        )
    }
}

export default EmailForm;