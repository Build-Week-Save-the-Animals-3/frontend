import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Campaign from "./components/Campaign";
import Register from "./components/Register";
import UpdateCampaign from "./components/UpdateCampaign";
import NewCampaign from './components/NewCampaign';
import NewsFeed from './components/NewsFeed';
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/campaign/:id" render={props => {
            return <Campaign {...props} />
          }} />
          <Route exact path="/update-campaign/:id" render={props => {
            return <UpdateCampaign {...props} />
          }} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/create-campaign" component={NewCampaign} />
          <Route exacth path="/newsfeed" component={NewsFeed} />
          <Route exact path="/contact" component={Contact} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

