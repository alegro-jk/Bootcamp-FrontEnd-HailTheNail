import React, {Component} from "react";
// import App from "../App";
// import AppLogo from "../components/AppLogo";
import './AdminView.css';
import Header from "../components/Header";
import SidebarEmployee from "../components/SidebarEmployee";



class EmpViewSilangServices extends Component {

    constructor (props) {
        super(props)
        this.state = {
            human: "",
            // result: "STAFF PERFORMANCE (SILANG BRANCH):\n• Minatozaki Sana: Excellent\n• Yoo Jeongyeon: Excellent\n• Son Chaeyoung: Excellent"
            services: [
                { id: 1, name: "MANICURE", price: 249 },
                { id: 2, name: "PEDICURE", price: 349 },
                { id: 3, name: "NAIL ART", price: 399 },
                { id: 4, name: "CRYOTHERAPY", price: 2999 },
                { id: 5, name: "CHEMICAL PEELING", price: 1499 },
             ],
        }
    }

    renderTableData() {
        return this.state.services.map((services, index) => {
           const { id, name, price } = services
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{price}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.services[0])
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
                <SidebarEmployee/>
                <div className="content">
                    <div>
                        <h1 id='title'>SILANG SERVICES</h1>
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

export default EmpViewSilangServices;
