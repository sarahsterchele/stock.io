import React, { Component } from 'react';
import Portfolio from '../components/Portfolio';
import PortfolioAdmin from '../components/PortfolioAdmin';
import logo from "../assets/logo-white.svg";
import './Dashboard.css';

import Client from '../components/Client';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            username: 'Elliot',
            overlay: false,
            selectedPortfolio: undefined,
            portfolios: []
        };
        
        this.editPortfolio = this.editPortfolio.bind(this);
        this.cancelPortfolioChanges = this.cancelPortfolioChanges.bind(this);
        this.savePortfolioChanges = this.savePortfolioChanges.bind(this);
    }

    componentWillMount() {
        Client.getPortfolios((portfoliosList) => { 
            const portfolios = portfoliosList.map(obj => obj); //Is this redundant? Check.
            this.setState({portfolios});
        });
    }
    
    editPortfolio(id) {
        this.setState({
            overlay: true,
            selectedPortfolio: id
        });
    }
    
    cancelPortfolioChanges() {
        this.setState({
            overlay: false,
            selectedPortfolio: undefined
        });
    }
    
    savePortfolioChanges() {
        // Save changes
        this.setState({
            overlay: false,
            selectedPortfolio: undefined
        });        
    }
    
    renderAdminPanel() {
        if (this.state.selectedPortfolio) {
            return <PortfolioAdmin  name={this.state.selectedPortfolio}
                                    cancelChanges={this.cancelPortfolioChanges}
                                    saveChanges={this.savePortfolioChanges}
                    />
        }
    }

    render() {
        return (
            <div className={`App ${this.state.overlay ? 'no-scroll' : ''}`}>
                <nav>
                    <ul>
                        <li className="nav-title">Stock.I<img src={logo} alt="O"/></li>
                        <li className="nav-button nav-account">{this.state.username}</li>
                    </ul>
                </nav>

                <div className="Dashboard">
                    {this.state.portfolios.map((portfolio, i) =>
                            <Portfolio key={i} name={portfolio.name} id={portfolio.id}
                                       editPortfolio={this.editPortfolio}
                            />)
                    }
                </div>
                
                {this.renderAdminPanel()}
            </div>
        );
    }
}

export default Dashboard;
