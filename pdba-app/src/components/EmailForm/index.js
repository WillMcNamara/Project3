import React, {Component} from "react";
import {Col, Row} from "../grid";
import "./style.css";

class EmailForm extends Component {

    render() {
        return(
            <form action="#">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" type="text" id="name" name="name" placeholder="Your name..."/>
                    
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" id="email" name="email" placeholder="Your email..."/>

                    <label htmlFor="age">Age:</label>
                    <input className="form-control" type="number" id="age" name="age" placeholder="Your age..."/>

                    <label htmlFor="gender">Gender:</label>
                    <select className="form-control" id="gender" name="gender" placeholder="Your gender...">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>

                    <label htmlFor="message">Message:</label>
                    <textarea rows="5" className="bigolthinger form-control" type="text" id="message" name="message" placeholder="Your message..."/>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>
        )
    }
}

export default EmailForm;