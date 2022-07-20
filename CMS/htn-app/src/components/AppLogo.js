import React, {Component} from "react";
import './AppLogo.css';
import logo from "./logo.jpg"
// import { Link } from 'react-router-dom';


class AppLogo extends Component {

    render() {
        return (
        <>
        <center>
                <img src={logo} id="logoId" alt="logo"/>
            </center>
        </>
        )
    }
}

export default AppLogo;
