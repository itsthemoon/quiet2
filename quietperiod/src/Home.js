import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import example from './example.gif';

function Home() {
    return (

        <div>
            <div className="start" >
                <h1 className="flex-item" id="homeTitle">Quiet Period 2024</h1>
                <div className="example">
                    <img src={example} alt="example" id="example" />
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
