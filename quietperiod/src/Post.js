import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Post() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="flex-container-home">
            <div className="app">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Post" name="post" id="firstName" ref={register} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}
export default Post;
