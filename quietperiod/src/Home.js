import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className="flex-container-home">
            <div className="app">
                <h1 className="flex-item">Quiet Period 2024</h1>
                <Link to="/scroll">
                    <button className="flex-item">Click to explore</button>
                </Link>
            </div>
        </div>
    );
}
export default Home;
