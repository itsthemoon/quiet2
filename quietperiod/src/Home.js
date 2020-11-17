import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
function Home() {
    const styles = {
        bounce: {
            animation: 'x 4s',
            animationName: Radium.keyframes(bounce, 'bounce')
        }
    }
    return (

        <StyleRoot>
            <div className="start" style={styles.bounce}>
                <h1 className="flex-item" id="homeTitle">Quiet Period 2024</h1>
            </div>
            <div className="start" >
                <Link to="/scroll">
                    <button className="flex-item">Click to explore</button>
                </Link>
            </div>
        </StyleRoot>


    );
}
export default Home;
