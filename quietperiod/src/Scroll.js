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
                <div>

                    <h2 className="title">Things Happening</h2>
                </div>
                {
                    this.state.posts.reverse().map((posts) =>
                        <div className="post">
                            <h3 id="post-title" >{posts.title}</h3>
                            <p id="post-text">{posts.body}</p>
                            <button id="going-btn" onClick={() => this.handleClick(posts._id)}>{posts.going} Attending</button>
                        </div>

                    )}
            </div>
        );
    }
}


