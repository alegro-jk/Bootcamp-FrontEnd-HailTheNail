import React, {Component} from "react";
import './Content.css';
import promo from "./promo.jpg"
// import { Link } from 'react-router-dom';
// import sana from "./sana.jpg"
// import jeongyeon from "./jeongyeon.jpg"
// import chaeyoung from "./chaeyoung.jpg"



class Promos extends Component {

    constructor(props) {
        super(props) 
        this.state = {
           promo: [
              { id: 1, name: 'Christmas Promo', month: "December", branch: 'Silang, Gentri, Nasugbu' },
            //   { id: 2, name: 'Yoo Jeongyeon', age: 25, branch: 'Silang' },
            //   { id: 3, name: 'Hirai Momo', age: 25, branch: 'Silang' },
            //   { id: 4, name: 'Minatozaki Sana', age: 25, branch: 'Gentri' },
            //   { id: 5, name: 'Park Jihyo', age: 24, branch: 'Gentri' },
            //   { id: 6, name: 'Myoui Mina', age: 24, branch: 'Gentri' },
            //   { id: 7, name: 'Kim Dahyun', age: 23, branch: 'Nasugbu' },
            //   { id: 8, name: 'Son Chaeyoung', age: 22, branch: 'Nasugbu' },
            //   { id: 9, name: 'Chou Tzuyu', age: 22, branch: 'Nasugbu' }
           ]
        }
     }

     renderTableData() {
        return this.state.promo.map((promo, index) => {
           const { id, name, month, branch } = promo
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{month}</td>
                 <td>{branch}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.promo[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    render() {
        return (
        <>
        <div className="content">
            <div>
                <h1 id='title'>Promo Info</h1>
                <table id='table'>
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </tbody>
                </table>
            </div>
        </div>
        </>
        )
    }
}

export default Promos;
