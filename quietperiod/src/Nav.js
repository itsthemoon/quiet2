import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div className="navbar">
            <div className="app">
                <Link to="/">
                    <button className="navbutton">Home Page</button>
                </Link>
                <Link to="/post">
                    <button className="navbutton">Post</button>
                </Link>
                <Link to="/login">
                    <button className="navbutton">Login</button>
                </Link>
            </div>
        </div>
    );
}
export default Nav;
