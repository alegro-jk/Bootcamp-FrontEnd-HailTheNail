import React, {Component} from "react";
// import App from "../App";
// import AppLogo from "../components/AppLogo";
import './AdminView.css';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Staffs from "../components/Staffs";



class AdminViewStaffs extends Component {

    constructor (props) {
        super(props)
        this.values = [ 
            {
                "value1": "Minatozaki Sana",
                "value2": "Nail art",
                "value3": 25
            }
        ]
        this.state = {
            human: "Admin"
        }
    }

    render() {
        return (
        <>
        <div id="hdr">
            <Header human="Admin"/>
            <div className="body">
                <Sidebar/>
                <Staffs/>
            </div>
        </div>
        </>
        )
    }
}

export default AdminViewStaffs;
