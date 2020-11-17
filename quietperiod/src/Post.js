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
                this.props.history.push('/scroll')



            })
            .catch(() => {
                console.log('Internal server error');
            });
    };

    render() {
        console.log("State ", this.state)
        return (
            <div className="flex-container">
                <form onSubmit={this.submit}>
                    <div className="add-event">
                        <input id="event"
                            placeholder="title"
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                        <textarea id="event" placeholder="description"
                            name="body"
                            cols="30" rows="10"
                            value={this.state.body}
                            onChange={this.handleChange}
                        >
                        </textarea>
                        <button id="event">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
