
import React from 'react';
import './App.css';
import axios from "axios";



export default class Scroll extends React.Component {

    state = {
        posts: [],
        going: 0
    }


    componentDidMount() {
        axios.get('http://localhost:5000/posts/save')
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    clicked = (event) => {
        event.preventDefault();
        alert(this.state.going)
        const payload = {
            going: this.state.posts.going + 1

        }

        axios({
            url: 'http://localhost:5000/posts/save/${:postId}',
            method: 'PATCH',
            data: payload,
        })
            .then(() => {
                alert({ payload })
                console.log('Data sent to the server');
            })
            .catch(() => {
                console.log('Internal server error');
            });
    };

    //make it so that when I select the option it changes the state of sort

    render() {

        return (
            <div className="flex-container">
                {
                    this.state.posts.reverse().map(posts =>
                        <div className="post">
                            <h3 id="post-text">{posts.title}</h3>
                            <p id="post-text">{posts.body}</p>
                            <p>{posts.going}</p>
                            <button onClick={this.clicked}>Going</button>
                        </div>
                    )}
            </div>
        );
    }
}


