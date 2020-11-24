import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Nav() {
    return (

        <div className="navbar">
            {/*navbar*/}
            <div className="app">
                <Link to="/scroll">
                    <button className="navbutton">posts</button>
                </Link>
                <Link to="/post">
                    <button className="navbutton">add event</button>
                </Link>
            </div>
        </div>

    );
}
export default Nav;
