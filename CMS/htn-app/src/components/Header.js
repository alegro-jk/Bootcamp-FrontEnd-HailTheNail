import React, {Component} from "react";
import './Header.css';
import logo from "./logo.jpg"
// import { Link } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
        <>
        <div className="header">
            <img src={logo} id="hdrlogo" alt="hdrlogo"/>
            <span id="greeting">Hello, our dearest <b><i>{this.props.human}</i></b>!</span>
        </div>
        </>
        )
    }
}

export default Header;
