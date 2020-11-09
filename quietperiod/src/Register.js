import React from 'react';
import axios from 'axios';


export default class Register extends React.Component {

    state = {
        username: "",
        password: ""
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            username: this.state.username,
            password: this.state.password,
        }

        axios({
            url: 'http://localhost:5000/posts/login',
            method: 'POST',
            data: payload,
        })
            .then(() => {
                console.log('Data sent to the server');
            })
            .catch(() => {
                console.log('Internal server error');
            });
    };

    render() {
        return (
            <div className="flex-container-home">
                <div className="app">
                    <form onSubmit={this.submit}>
                        <input
                            placeholder="Username"
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <textarea placeholder="password"
                            name="password"
                            cols="30" rows="10"
                            value={this.state.password}
                            onChange={this.handleChange}
                        >
                        </textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
