import React, {Component} from "react";
// import App from "../App";
// import AppLogo from "../components/AppLogo";
import './AdminView.css';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";



class AdminViewBranches extends Component {

    constructor (props) {
        super(props)
        this.state = {
            human: "",
            // result: "LIST OF BRANCHES:\n• SILANG CAVITE BRANCH\n• GENTRI BRANCH\n• NASUGBU BATANGAS BRANCH\n"
        // }
        // this.state = {
            branches: [
               { id: 1, name: 'Hail the Nail', branch: "Silang", address: 'J.P Rizal St, Silang 4118 Cavite' },
               { id: 2, name: 'Hail the Nail', branch: "Gentri", address: 'Lancaster, Pasong Camachile I, General Trias 4107 Cavite' },
               { id: 3, name: 'Hail the Nail', branch: "Nasugbu", address: 'J.P Laurel St, Poblacion, Nasugbu 4231 Batangas' },
            ]
         }
    }

    renderTableData() {
        return this.state.branches.map((branches, index) => {
           const { id, name, branch, address } = branches
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{branch}</td>
                 <td>{address}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.branches[0])
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
                        <h1 id='title'>Branches nationwide</h1>
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

export default AdminViewBranches;
