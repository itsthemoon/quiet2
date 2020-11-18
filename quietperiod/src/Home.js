import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Home() {
    return (

        <div>
            <div className="start" >
                <h1 className="flex-item" id="homeTitle">Quiet Period 2024</h1>
                <div>
                    <img src="https://freepikpsd.com/wp-content/uploads/2020/04/blueno-png-3-Free-Images-Transparent.png" alt="example" id="bear" />
                </div>
            </div>
            <div className="start" >
                <Link to="/scroll">
                    <button className="flex-item">Click to explore</button>
                </Link>
            </div>
        </div>
    );
}
export default Home;
