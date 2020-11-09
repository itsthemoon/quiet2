import './App.css';
import React from "react";
import Axios from "axios";
import Home from "./Home";
import Scroll from "./Scroll"
import Nav from "./Nav.js"
import Post from "./Post";
import Login from "./Login";
import Register from "./Register";
import Saved from "./Saved"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });



  return (

    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/scroll" component={Scroll} />
        <Route path="/post" component={Post} />
        <Route path="/login" component={Login} />
        <Route path="/saved" component={Saved} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
