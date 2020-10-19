import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/home" className="nav-link">DIYBanner</Link>
                <div className="collpase navbar-collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="collpase navbar-collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">Professionals</Link>
                        </li>
                    </ul>
                </div>
                <div className="collpase navbar-collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">Print Shops</Link>
                        </li>
                    </ul>
                </div>
                <div className="collpase navbar-collpase">
                    <ul className="navbar-nav mr-auto" >
                        <li className="navbar-item" style={{ float: "right" }}>
                            <Link to="/user" className="nav-link">Sign Up | Login</Link>
                        </li>
                    </ul>
                </div>
            </nav >
        );
    }
}