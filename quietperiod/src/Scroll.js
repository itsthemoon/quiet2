import React, { useState } from 'react';
import './App.css';



function Scroll() {
    return (

        <div className="flex-container">
            <div className="post">
                <h3 id="post-text">Title</h3>
                <p id="post-text">message</p>
            </div>
            <div className="post">
                <h3 id="post-text">Title</h3>
                <p id="post-text">message</p>
            </div>
            <div className="post">
                <h3 id="post-text">Title</h3>
                <p id="post-text">message</p>
            </div>
        </div>
    );
}
export default Scroll;
