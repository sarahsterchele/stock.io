import React, { Component } from 'react';
import StockList from '../components/StockList';
import logo from "../assets/logo-white.svg";
import './Dashboard.css';

class Dashboard extends Component {
    constructor() {
        super();
        this.lists = [
            { 'name': 'Technology' },
            { 'name': 'Health' },
            { 'name': 'Entertainment' },
            { 'name': 'Technology' },
            { 'name': 'Health' },
            { 'name': 'Entertainment' },
            { 'name': 'Technology' },
            { 'name': 'Health' },
            { 'name': 'Entertainment' }
        ];
    }

    render() {
        return (
            <div className="App">
                <nav>
                    <ul>
                        <li className="nav-title">
                            Stock.I<img src={logo} alt="O"/>
                        </li>
                        <li className="nav-button nav-account">{this.props.name}</li>
                    </ul>
                </nav>

                <div className="Dashboard">
                    {this.lists.map((list, i) => <StockList key={i} name={list.name}/>)}
                </div>
            </div>
        );
    }
}

export default Dashboard;
