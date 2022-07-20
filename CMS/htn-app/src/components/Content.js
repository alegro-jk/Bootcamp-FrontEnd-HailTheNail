import React, {Component} from "react";
import './Content.css';
// import twicelogo from "./twice.jpg"
// import { Link } from 'react-router-dom';


class Content extends Component {

    render() {
        return (
        <>
        <div className="content">
            <pre>{this.props.result}</pre>
        </div>
        </>
        )
    }
}

export default Content;
