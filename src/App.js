import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Campaign from "./components/Campaign";
import Register from "./components/Register";
import UpdateCampaign from "./components/UpdateCampaign";
import NewCampaign from './components/NewCampaign';
import NewsFeed from './components/NewsFeed';
import SearchForm from './components/SearchForm';
import SearchedCampaigns from './components/SearchedCampaigns';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={NewsFeed} />
          <Route exact path="/campaign/:id" render={props => {
            return <Campaign {...props} />
          }} />
          <Route exact path="/update-campaign/:id" render={props => {
            return <UpdateCampaign {...props} />
          }} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/create-campaign" component={NewCampaign} />
          <Route exact path="/search" render={props => {
            return <SearchForm {...props} />
          }} />
          <Route exact path="/searchedresults" component={SearchedCampaigns} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

