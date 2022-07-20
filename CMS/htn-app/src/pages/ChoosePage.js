import React, {Component} from "react";
// import App from "../App";
import AppLogo from "../components/AppLogo";
import './ChoosePage.css';
import { Link } from 'react-router-dom';



class ChoosePage extends Component {

    render() {
        return (
        <>
        <div>
            <AppLogo/>
            <div id="btns">
            <center>
            <button classname="adminbtn"><Link to="/adminview" style={{ textDecoration: "none", color: "black", padding: "0 40px" }} >I AM AN ADMIN</Link></button>
            <button classname="empbtn"><Link to="/employeeview" style={{ textDecoration: "none", color: "black", padding: "0 25px" }} >I AM AN EMPLOYEE</Link></button>
            </center>
        </div>
        </div>
        </>
        )
    }
}

export default ChoosePage;
