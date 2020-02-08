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
import Opportunities from './components/Opportunities';
import ContactForm from './components/Contact';


import SearchForm from './components/SearchForm';
import SearchedCampaigns from './components/SearchedCampaigns';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={NewsFeed} />
          <Route exact path='/opportunities' component={Opportunities} />
          <Route path='/contact' component={ContactForm} />
          <Route exact path="/campaign/:id" render={props => {
            return <Campaign {...props} />
          }} />
          <Route exact path="/update-campaign/:id" render={props => {
            return <UpdateCampaign {...props} />
          }} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/create-campaign" component={NewCampaign} />
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



// Francois code

// Needed to delete to resolve conflicts

// import {Route} from 'react-router-dom';
// import ContactForm from './components/Contact'
// import Opportunities from './components/Opportunities';
// import Campaign from './components/Campaign';


// function App() {
//   return(
//     <div className="App">
//       <div className='header'>
//       <h1><i className="fas fa-key key"></i><span>key</span>Conservation</h1>
//       <Route exact path='/' component={NewsFeed} />
//       <Route path='/contact' component={ContactForm} />
//       <Route exact path='/campaign/:id' component={Campaign} />
//       <Route exact path='/opportunities' component={Opportunities} />
//       </div>
//     </div>
//   );
// }

// export default App;