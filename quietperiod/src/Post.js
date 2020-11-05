import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        post: '',
    }

    handleChange = event => {
        this.setState({ post: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const post = {
            post: this.state.name
        };

        axios.post('http://localhost:5000/posts', { post })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="flex-container-home">
                <div className="app">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Post:
                        <input type="text" name="post" onChange={this.handleChange} />
                        </label>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
