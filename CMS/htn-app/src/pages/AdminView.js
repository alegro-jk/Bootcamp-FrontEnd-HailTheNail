import React, {Component} from "react";
// import App from "../App";
// import AppLogo from "../components/AppLogo";
import './AdminView.css';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ContentHome from "../components/ContentHome";


class AdminView extends Component {

    constructor (props) {
        super(props)
        this.state = {
            human: ""
        }
    }

    render() {
        return (
        <>
        <div id="hdr">
            <Header human="Admin"/>
            <div className="body">
            <Sidebar/>
            <ContentHome/>
            </div>
        </div>
        </>
        )
    }
}

export default AdminView;
