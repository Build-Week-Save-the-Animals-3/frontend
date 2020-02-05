import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Campaign from "./components/Campaign";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/campaign/:id" component={Campaign} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

