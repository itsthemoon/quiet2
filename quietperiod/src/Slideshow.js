import React from 'react';
import './App.css';
import ReactSwipe from 'react-swipe';
import example from './images/example.gif';
import example2 from './images/example2.gif';
import example3 from './images/example3.gif';








const Carousel = () => {
    let reactSwipeEl;

    return (
        <div>
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: false }}
                ref={el => (reactSwipeEl = el)}
            >
                <div >
                    <img src={example} alt="example" id="example" />
                </div>
                <div>
                    <img src={example2} alt="example2" id="example" />
                </div>
                <div>
                    <img src={example3} alt="example3" id="example" />
                </div>
            </ReactSwipe>
            <button className="demobutton" onClick={() => reactSwipeEl.prev()}>Previous</button>
            <button className="demobutton" onClick={() => reactSwipeEl.next()}>Next</button>
        </div>
    );
};

export default Carousel;
