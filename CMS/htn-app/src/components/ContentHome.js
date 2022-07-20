import React, {Component} from "react";
import './ContentHome.css';
import twicelogo from "./twice.jpg"
// import { Link } from 'react-router-dom';


class ContentHome extends Component {

    render() {
        return (
        <>
        <div className="content">
            <img src={twicelogo} id="twicelogo" alt="twicelogo"/>
        </div>
        </>
        )
    }
}

export default ContentHome;
