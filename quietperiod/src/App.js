import './App.css';
import Axios from "axios";
import Home from "./Home";
import Scroll from "./Scroll"
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/scroll" component={Scroll} />
      </Switch>
    </Router>
  );
}

export default App;
