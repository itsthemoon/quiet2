
import React from 'react';
import './App.css';
import axios from "axios";
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';



export default class Scroll extends React.Component {

    state = {
        posts: [],
        going: 3
    }


    componentDidMount() {
        axios.get('http://localhost:5000/posts/save')
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }


    handleClick = (id) => {
        var i;

        for (i = 0; i < this.state.posts.length; i++) {
            if (this.state.posts[i]._id === id) {
                let x = this.state.posts[i].going + 1;
                axios({
                    url: `http://localhost:5000/posts/save/${id}`,
                    method: 'patch',
                    data: { going: x }
                })
                    .then(() => {
                        console.log(x);
                        this.componentDidMount()
                    })
                    .catch(() => {
                        console.log('Internal server error');
                    });
            }
        }


    }
    //it works, but the data ends up saying null and idk y 
    render() {

        return (

            <div className="flex-container">

                {
                    this.state.posts.reverse().map((posts) =>
                        <div className="post">
                            <h3 id="post-text">{posts.title}</h3>
                            <p id="post-text">{posts.body}</p>
                            <p id="post-text">Attendees:{posts.going}</p>
                            <button id="going-btn" onClick={() => this.handleClick(posts._id)}>Going</button>
                        </div>

                    )}
            </div>
        );
    }
}


