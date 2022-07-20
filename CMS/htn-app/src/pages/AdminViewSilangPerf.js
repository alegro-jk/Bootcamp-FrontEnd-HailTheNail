import React, {Component} from "react";
// import App from "../App";
// import AppLogo from "../components/AppLogo";
import './AdminView.css';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";



class AdminViewSilangPerf extends Component {

    constructor (props) {
        super(props)
        this.state = {
            human: "",
            // result: "STAFF PERFORMANCE (SILANG BRANCH):\n• Minatozaki Sana: Excellent\n• Yoo Jeongyeon: Excellent\n• Son Chaeyoung: Excellent"
            staffs: [
                { staff: "Im Nayeon", daily: 24, weekly: 144, monthly: 576 },
                { staff: "Yoo Jeongyeon", daily: 25, weekly: 150, monthly: 600 },
                { staff: "Hirai Momo", daily: 26, weekly: 156, monthly: 624 },
                // { service: "Cryotherapy", daily: 2, weekly: 12, monthly: 48 },
                // { service: "Chemical Peeling", daily: 3, weekly: 18, monthly: 72 },
             ],
        }
    }

    renderTableData() {
        return this.state.staffs.map((staffs, index) => {
           const { staff, daily, weekly, monthly } = staffs
           return (
              <tr key={staff}>
                 <td>{staff}</td>
                 <td>{daily}</td>
                 <td>{weekly}</td>
                 <td>{monthly}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.staffs[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    render() {
        return (
        <>
        <div id="hdr">
            <Header human="Admin"/>
            <div className="body">
                <Sidebar/>
                <div className="content">
                    <div>
                        <h1 id='title'>Employee Services Done</h1>
                        <table id='table'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
}

export default AdminViewSilangPerf;
