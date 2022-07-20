import React, {Component} from "react";
// import { useState } from "react";
import './Table3x3.css';
// import logo from "./logo.jpg"
// import { Link } from 'react-router-dom';


class Table3x3 extends Component {

        constructor(props) {
            super(props)
            this.values = [];

            // }
        }

    // const Table3x3 = () => {
    // const [values, setValues] = useState(this.data);
    render() {
        return (
        <>
        <div id="table3x3">
            <table>
                <thead>
                    <th>Name</th>
                    <th>Expertise</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    {this.values.map((value) => (
                    <tr>
                        <td>{this.value.column1}</td>
                        <td>{this.value.column2}</td>
                        <td>{this.value.column3}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
        </>
        )
    }
}

export default Table3x3;
