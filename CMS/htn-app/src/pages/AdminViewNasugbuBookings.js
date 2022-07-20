import React, {Component} from "react";
// import App from "../App";
// import AppLogo from "../components/AppLogo";
import './AdminView.css';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";



class AdminViewNasugbuBookings extends Component {

    constructor (props) {
        super(props)
        this.state = {
            human: "",
            // result: "BOOKINGS (NASUGBU BRANCH):\n• Manicure\n   -Daily: 12\n   -Weekly: 72\n   -Monthly: 288\n\n• Pedicure\n   -Daily: 12\n   -Weekly: 72\n   -Monthly: 288\n\n• Nail Extension\n   -Daily: 5\n   -Weekly: 30\n   -Monthly: 120\n\n• Nail Art\n   -Daily: 12\n   -Weekly: 72\n   -Monthly: 288\n\n• Cryotherapy\n   -Daily: 2\n   -Weekly: 12\n   -Monthly: 48\n\n• Chemical Peeling\n   -Daily: 3\n   -Weekly: 18\n   -Monthly: 72\n\n"
            services: [
                { service: "Manicure", daily: 12, weekly: 72, monthly: 288 },
                { service: "Pedicure", daily: 12, weekly: 72, monthly: 288 },
                { service: "Nail Art", daily: 5, weekly: 30, monthly: 120 },
                { service: "Cryotherapy", daily: 2, weekly: 12, monthly: 48 },
                { service: "Chemical Peeling", daily: 3, weekly: 18, monthly: 72 },
             ],
             products: [
                { product: "Nail Dryer", daily: 2, weekly: 12, monthly: 48 },
                { product: "Nail Polish Set", daily: 5, weekly: 30, monthly: 120 },
                { product: "Manicure Set", daily: 3, weekly: 18, monthly: 72 },
                // { product: "Cryotherapy", daily: 2, weekly: 12, monthly: 48 },
                // { product: "Chemical Peeling", daily: 3, weekly: 18, monthly: 72 },
             ]
        }
    }

    renderTableData1() {
        return this.state.services.map((services, index) => {
           const { service, daily, weekly, monthly } = services
           return (
              <tr key={service}>
                 <td>{service}</td>
                 <td>{daily}</td>
                 <td>{weekly}</td>
                 <td>{monthly}</td>
              </tr>
           )
        })
     }

     renderTableHeader1() {
        let header = Object.keys(this.state.services[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

     renderTableData2() {
        return this.state.products.map((products, index) => {
           const { product, daily, weekly, monthly } = products
           return (
              <tr key={product}>
                 <td>{product}</td>
                 <td>{daily}</td>
                 <td>{weekly}</td>
                 <td>{monthly}</td>
              </tr>
           )
        })
     }

     renderTableHeader2() {
        let header = Object.keys(this.state.products[0])
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
                        <h1 id='title'>NASUGBU Booking History</h1>
                        <table id='table'>
                        <tbody>
                            <tr>{this.renderTableHeader1()}</tr>
                            {this.renderTableData1()}
                        </tbody>
                        </table>
                        <br></br>
                        <table id='table'>
                        <tbody>
                            <tr>{this.renderTableHeader2()}</tr>
                            {this.renderTableData2()}
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

export default AdminViewNasugbuBookings;
