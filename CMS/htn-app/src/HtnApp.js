import React, {Component} from "react";
import './HtnApp.css';
// import logo from "./logo.jpg"
import AppLogo from "./components/AppLogo";
import { Link } from 'react-router-dom';


class HtnApp extends Component {

    constructor() {
        super();
        this.state = {value: "" };
    }

    textNum1(e) {
        this.setState({ inputvalue1:e.target.value.replace(/[^a-zA-Z0-9]/g, "") });
    }
    textNum2(e) {
        this.setState({ inputvalue2:e.target.value.replace(/[^a-zA-Z0-9]/g, "") });
    }

    render() {
        return (
        <>
        <div>
            <AppLogo/>
            <center>
            <div className="login">
                <br></br><input type="text" value={this.state.inputvalue1} onChange={this.textNum1.bind(this)} id="username" placeholder="Enter username here:" /><br></br>
                <br></br><input type="password" value={this.state.inputvalue2} onChange={this.textNum2.bind(this)} id="password" placeholder="Enter password here:" /><br></br>
            </div><br></br>
            <div>
                <button classname="btn"><Link to="/choosepage" style={{ textDecoration: "none", color: "black" }} onClick={enterSubmit}>LOGIN</Link></button>
            </div></center>
        </div>
        </>
        )
    }
}

function enterSubmit(event) {
    var validUsername = document.getElementById("username").value;
    var validPassowrd = document.getElementById("password").value;
    if(validUsername === "" || validPassowrd === "") {
        alert("Login failed! Please enter a valid username and password.");
        event.preventDefault();
    }
}

export default HtnApp;
