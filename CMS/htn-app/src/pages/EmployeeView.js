import React, {Component} from "react";
// import App from "../App";
// import AppLogo from "../components/AppLogo";
import './EmployeeView.css';
import Header from "../components/Header";
import SidebarEmployee from "../components/SidebarEmployee";
import ContentHomeEmployee from "../components/ContentHomeEmployee";


class EmployeeView extends Component {

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
            <Header human="Employee"/>
            <div className="body">
                <SidebarEmployee/>
                <ContentHomeEmployee/>
            </div>
        </div>
        </>
        )
    }
}

export default EmployeeView;
