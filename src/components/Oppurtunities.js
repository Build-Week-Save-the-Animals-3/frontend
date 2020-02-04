import React from 'react';
import {Link} from 'react-router-dom';

export default function Oppurtunities() {
    return (
        <div className='opp-container'>
            <nav className='nav-bar'>
                <Link to='/'>Newsfeed</Link>
                <Link to='/donations'>Donations</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>
            <div className='bg-img'></div>
            <h2>Would you like to help in your community?</h2>
            <hr/>
            <div className='rallies'>
            <h3>Rallies</h3>
                <p>Attend rallies in your neighborhood helping to bring a change to the species in danger of extinct</p>
                <img className='hands' src='https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' alt='hands together in a circle'/>
            </div>
            <hr/>
        </div>
    )
}
