import React, {Component} from "react";
// import App from "../App";
// import AppLogo from "../components/AppLogo";
import './AdminView.css';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";



class AdminViewGuests extends Component {

    constructor (props) {
        super(props)
        this.state = {
            human: "",
            guests: [
                { date: "12/19/21", name: 'Kim Minjeong', branch: "Silang", service: 'Manicure, Cryotheray', product: "-" },
                { date: "12/20/21", name: 'Yoo Jimin', branch: "Gentri", service: 'Manicure, Pedicure', product: "Nail Polish Set" },
                { date: "12/21/21", name: 'Uchinaga Aeri', branch: "Nasugbu", service: 'Chemical Peeling', product: "-" },
                { date: "12/22/21", name: 'Yizhou Ningning', branch: "Nasugbu", service: 'Nail Art', product: "-"  },
                { date: "12/23/21", name: 'Hwang Yeji', branch: "Gentri", service: '-', product: "Nail Dryer"  },
                { date: "12/24/21", name: 'Shin Ryujin', branch: "Silang", service: 'Pedicure, Chemical Peeling', product: "-"  },
                { date: "12/25/21", name: 'Shin Yuna', branch: "Nasugbu", service: 'Cryotherapy', product: "-"  },
                { date: "12/25/21", name: 'Choi Jisu', branch: "Nasugbu", service: 'Pedicure', product: "-"  },
                { date: "12/25/21", name: 'Lee Chaeryeong', branch: "Silang", service: 'Manicure, Pedicure', product: "Manicure Set"  },
             ]
            // result: "LIST OF GUESTS:\n• Im Nayeon\n• Hirai Momo\n• Park Jihyo\n• Myoui Mina\n• Kim Dahyun\n• Chou Tzuyu\n• Kim Minjeong\n• Yoo Jimin\n• Yizhou Ning\n• Uchinaga Aeri\n"
        }
    }

    renderTableData() {
        return this.state.guests.map((guests, index) => {
           const { date, name, branch, service, product } = guests
           return (
              <tr key={date}>
                 <td>{date}</td>
                 <td>{name}</td>
                 <td>{branch}</td>
                 <td>{service}</td>
                 <td>{product}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.guests[0])
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
                        <h1 id='title'>Guests</h1>
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

export default AdminViewGuests;
