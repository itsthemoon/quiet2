
import React from 'react';
import './App.css';
import axios from "axios";

export default class Scroll extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/posts/save')
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    render() {
        return (
            <div className="flex-container">
                {
                    this.state.posts.map(posts =>
                        <div className="post">
                            <h3 id="post-text">{posts.title}</h3>
                            <p id="post-text">{posts.body}</p>
                        </div>
                    )}
            </div>
        );
    }
}


