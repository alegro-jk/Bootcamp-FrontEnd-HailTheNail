import React, {Component} from "react";
import './Sidebar.css';
// import logo from "./logo.jpg"
import { Link } from 'react-router-dom';


class Sidebar extends Component {

    render() {
        return (
        <>
        <div className="sidebar">
            <div className="store">
                <h1><b>STORE INFO</b></h1>
                <a href="javascript:void(0)" id="info"><Link to="/adminview_staffs" style={{ textDecoration: "none", color: "black" }} >• STAFFS</Link></a><br></br>
                <a href="javascript:void(0)" id="info"><Link to="/adminview_promos" style={{ textDecoration: "none", color: "black" }} >• PROMOS</Link></a><br></br>
                <a href="javascript:void(0)" id="info"><Link to="/adminview_branches" style={{ textDecoration: "none", color: "black" }} >• BRANCHES</Link></a><br></br>
                <a href="javascript:void(0)" id="info"><Link to="/adminview_guests" style={{ textDecoration: "none", color: "black" }} >• GUESTS</Link></a><br></br>
            </div><br></br>
            <div className="reports">
                <h1><b>REPORTS</b></h1>
                    <h2><b>SILANG BRANCH</b></h2>
                        <a href="javascript:void(0)" id="info"><Link to="/adminview_silang_income" style={{ textDecoration: "none", color: "black" }} >• INCOME</Link></a><br></br>
                        <a href="javascript:void(0)" id="info"><Link to="/adminview_silang_bookings" style={{ textDecoration: "none", color: "black" }} >• BOOKINGS</Link></a><br></br>
                        <a href="javascript:void(0)" id="info"><Link to="/adminview_silang_staff_performance" style={{ textDecoration: "none", color: "black" }} >• STAFF PERFORMANCE</Link></a><br></br><br></br>
                    <h2><b>GENTRI BRANCH</b></h2>
                        <a href="javascript:void(0)" id="info"><Link to="/adminview_gentri_income" style={{ textDecoration: "none", color: "black" }} >• INCOME</Link></a><br></br>
                        <a href="javascript:void(0)" id="info"><Link to="/adminview_gentri_bookings" style={{ textDecoration: "none", color: "black" }} >• BOOKINGS</Link></a><br></br>
                        <a href="javascript:void(0)" id="info"><Link to="/adminview_gentri_staff_performance" style={{ textDecoration: "none", color: "black" }} >• STAFF PERFORMANCE</Link></a><br></br><br></br>
                    <h2><b>NASUGBU BRANCH</b></h2>
                        <a href="javascript:void(0)" id="info"><Link to="/adminview_nasugbu_income" style={{ textDecoration: "none", color: "black" }} >• INCOME</Link></a><br></br>
                        <a href="javascript:void(0)" id="info"><Link to="/adminview_nasugbu_bookings" style={{ textDecoration: "none", color: "black" }} >• BOOKINGS</Link></a><br></br>
                        <a href="javascript:void(0)" id="info"><Link to="/adminview_nasugbu_staff_performance" style={{ textDecoration: "none", color: "black" }} >• STAFF PERFORMANCE</Link></a>
            </div><br></br>
            <div>
                <button id="logout"><Link to="/" style={{ textDecoration: "none" }} >LOGOUT</Link></button><br></br>
            </div>   
        </div>
        </>
        )
    }
}

export default Sidebar;
