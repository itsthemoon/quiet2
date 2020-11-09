import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {

    state = {
        username: "",
        password: "",
        users: []
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    };

    componentDidMount() {
        axios.get("http://localhost:5000/posts/login")
            .then(res => {
                console.log(res);
                this.setState({ users: res.data });
            })
    }

    submit = (event) => {
        event.preventDefault();

        //when the user submit I look to see if the username they give is the same as a username in users. If so, is the password the same?
        var i;
        for (i = 0; i < this.state.users.length; i++) {
            if (this.state.username === this.state.users[i].username) {
                if (this.state.password === this.state.users[i].password) {
                    alert("Logged in");
                }
            }
        }

    }

    render() {
        console.log("state:", this.state);
        return (
            <div className="flex-container-home">
                <Link to={"/register"}>Need to register?</Link>
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
            </div >
        )
    }
}
