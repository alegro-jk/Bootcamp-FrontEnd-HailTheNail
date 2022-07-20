import React, {Component} from "react";
import './ContentHomeEmployee.css';
import twicelogo1 from "./twice1.jpg"
// import { Link } from 'react-router-dom';


class ContentHomeEmployee extends Component {

    render() {
        return (
        <>
        <div className="content">
            <img src={twicelogo1} id="twicelogo1" alt="twicelogo1"/>
        </div>
        </>
        )
    }
}

export default ContentHomeEmployee;
