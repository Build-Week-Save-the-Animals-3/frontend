import React from 'react';
import './App.scss';
import NewsFeed from './components/NewsFeed';
import {Route} from 'react-router-dom';
import ContactForm from './components/Contact'
import Opportunities from './components/Opportunities';
import Campaign from './components/Campaign';
// import Post_Card from './components/Post_Card';
// import Post_Card from './components/Post_Card';

function App() {
  return(
    <div className="App">
      <div className='header'>
      <h1><i className="fas fa-key key"></i><span>key</span>Conservation</h1>
      {/* <Post_Card/> */}
      <Route exact path='/' component={NewsFeed} />
      <Route path='/contact' component={ContactForm} />
      <Route exact path='/campaign/:id' component={Campaign} />
      <Route exact path='/opportunities' component={Opportunities} />
      </div>
    </div>
  );
}

export default App;

