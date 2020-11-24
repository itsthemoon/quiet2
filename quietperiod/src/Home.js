import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import ior from './images/ior4.png';
import white from './images/whitebluneo.png';
import black from './images/blackbluneo.png';

function Home() {
    return (

        <div>
            <div className="start" >
                <img src={ior} className="pic"></img>
                <div>
                    <img src="https://freepikpsd.com/wp-content/uploads/2020/04/blueno-png-3-Free-Images-Transparent.png" alt="example" id="bear" />
                </div>
                <div className="btmp">
                    <div className="btmpics">
                        <img src={black} className="btmpic"></img>
                        <img src={black} className="btmpic"></img>
                        <img src={black} className="btmpic"></img>
                        <img src={black} className="btmpic"></img>
                        <img src={black} className="btmpic"></img>

                        <img src={white} className="btmpic"></img>
                        <img src={black} className="btmpic"></img>
                    </div>
                </div>
            </div>
            <div className="start" >
                <Link to="/scroll">
                    {/*button leads to post page*/}
                    <button className="flex-item">click to explore</button>
                </Link>
            </div>
        </div>
    );
}
export default Home;
