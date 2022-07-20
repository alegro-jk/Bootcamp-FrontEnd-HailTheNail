import React, {Component} from "react";
// import App from "../App";
// import AppLogo from "../components/AppLogo";
import './AdminView.css';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";



class AdminViewNasugbuIncome extends Component {

    constructor (props) {
        super(props)
        this.state = {
            human: "",
            // result: "INCOME (SILANG BRANCH):\n• Daily: P30,000\n   -Cash: 12,000\n   -Card: 18,000\n\n• Weekly: 180,000\n   -Cash: 72,000\n   -Card: 108,000\n\n• Monthly: 720,000\n   -Cash: 288,000\n   -Card: 432,000"
            daily: [
                { day: "12/19/21", cash: 20000, card: 10000, income: 30000 },
                { day: "12/20/21", cash: 25000, card: 15000, income: 35000 },
                { day: "12/21/21", cash: 22000, card: 12000, income: 32000 },
                { day: "12/22/21", cash: 12000, card: 30000, income: 42000 },
                { day: "12/23/21", cash: 32000, card: 18000, income: 40000 },
                { day: "12/24/21", cash: 30000, card: 33000, income: 63000 },
                { day: "12/25/21", cash: 28000, card: 27000, income: 55000 },
             ],
            weekly: [
            { week: 1, cash: 152000, card: 145000, income: 297000 },
            { week: 2, cash: 160000, card: 192000, income: 352000 },
            { week: 3, cash: 174000, card: 130000, income: 304000 },
            ],

            monthly: [
                { month: 1, cash: 608000, card: 580000, income: 1188000 },
                // { id: 2, name: 'Hail the Nail', branch: "Gentri", address: 'Lancaster, Pasong Camachile I, General Trias 4107 Cavite' },
                // { id: 3, name: 'Hail the Nail', branch: "Nasugbu", address: 'J.P Laurel St, Poblacion, Nasugbu 4231 Batangas' },
             ]
        }
    }

    renderTableData1() {
        return this.state.daily.map((daily, index) => {
           const { day, cash, card, income } = daily
           return (
              <tr key={day}>
                 <td>{day}</td>
                 <td>{cash}</td>
                 <td>{card}</td>
                 <td>{income}</td>
              </tr>
           )
        })
     }

     renderTableData2() {
        return this.state.weekly.map((weekly, index) => {
           const { week, cash, card, income } = weekly
           return (
              <tr key={week}>
                 <td>{week}</td>
                 <td>{cash}</td>
                 <td>{card}</td>
                 <td>{income}</td>
              </tr>
           )
        })
     }

     renderTableData3() {
        return this.state.monthly.map((monthly, index) => {
           const { month, cash, card, income } = monthly
           return (
              <tr key={month}>
                 <td>{month}</td>
                 <td>{cash}</td>
                 <td>{card}</td>
                 <td>{income}</td>
              </tr>
           )
        })
     }

     renderTableHeader1() {
        let header = Object.keys(this.state.daily[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

     renderTableHeader2() {
        let header = Object.keys(this.state.weekly[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

     renderTableHeader3() {
        let header = Object.keys(this.state.monthly[0])
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
                        <h1 id='title'>NASUGBU Income Report</h1>
                        <h3>• Daily</h3>
                        <table id='table'>
                        <tbody>
                            <tr>{this.renderTableHeader1()}</tr>
                            {this.renderTableData1()}
                        </tbody>
                        </table>
                        <h3>• Weekly</h3>
                        <table id='table'>
                        <tbody>
                            <tr>{this.renderTableHeader2()}</tr>
                            {this.renderTableData2()}
                        </tbody>
                        </table>
                        <h3>• Monthly</h3>
                        <table id='table'>
                        <tbody>
                            <tr>{this.renderTableHeader3()}</tr>
                            {this.renderTableData3()}
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

export default AdminViewNasugbuIncome;
