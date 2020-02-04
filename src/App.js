import React from 'react';
import './App.scss';
import NewsFeed from './components/NewsFeed';
import {Route} from 'react-router-dom';
import Donations from './components/Donations';
import Contact from './components/Contact'
import Oppurtunities from './components/Oppurtunities';

function App() {
  return(
    <div className="App">
      <div className='header'>
      <h1><i class="fas fa-key"></i><span>key</span>Conservation</h1>
      <Route exact path='/' component={NewsFeed} />
      <Route path='/donations' component={Donations} />
      <Route path='/contact' component={Contact} />
      <Route path='/oppurtunities' component={Oppurtunities} />
      </div>
    </div>
  );
}

export default App;

