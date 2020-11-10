import React from 'react';
import axios from 'axios';


export default class Post extends React.Component {

    state = {
        title: "",
        body: "",
        going: 1
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
            title: this.state.title,
            body: this.state.body,
            going: this.state.going
        }

        axios({
            url: 'http://localhost:5000/posts/save',
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
        console.log("State ", this.state)
        return (
            <div className="flex-container-home">
                <div className="app">
                    <form onSubmit={this.submit}>
                        <input
                            placeholder="title"
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                        <textarea placeholder="description"
                            name="body"
                            cols="30" rows="10"
                            value={this.state.body}
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
