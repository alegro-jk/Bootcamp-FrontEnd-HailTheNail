import React, {Component} from "react";
// import App from "../App";
// import AppLogo from "../components/AppLogo";
import './AdminView.css';
import Header from "../components/Header";
import SidebarEmployee from "../components/SidebarEmployee";



class EmpViewGentriProducts extends Component {

    constructor (props) {
        super(props)
        this.state = {
            human: "",
            // result: "STAFF PERFORMANCE (SILANG BRANCH):\n• Minatozaki Sana: Excellent\n• Yoo Jeongyeon: Excellent\n• Son Chaeyoung: Excellent"
            products: [
                { id: 1, name: "120W UV LED La,p Nail Dryer", price: 1499 },
                { id: 2, name: "36pcs Gel Nail Polish Set", price: 499 },
                { id: 3, name: "18 in 1 Stainless Steel Manicure Kit", price: 449 },
                // { id: 4, name: "CRYOTHERAPY", price: 2999 },
                // { id: 5, name: "CHEMICAL PEELING", price: 1499 },
             ],
        }
    }

    renderTableData() {
        return this.state.products.map((products, index) => {
           const { id, name, price } = products
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
                <SidebarEmployee/>
                <div className="content">
                    <div>
                        <h1 id='title'>GENTRI PRODUCTS</h1>
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

export default EmpViewGentriProducts;
