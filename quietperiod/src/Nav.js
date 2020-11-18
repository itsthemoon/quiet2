import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Nav() {
    return (

        <div className="navbar">
            <div className="app">
                <Link to="/scroll">
                    <button className="navbutton">Posts</button>
                </Link>
                <Link to="/post">
                    <button className="navbutton">Add Event</button>
                </Link>
                <Link to="/demo">
                    <button className="navbutton">Demo</button>
                </Link>
            </div>
        </div>

    );
}
export default Nav;
