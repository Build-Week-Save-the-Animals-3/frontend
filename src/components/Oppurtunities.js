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
            <div className='bg-img'>
            </div>
        </div>
    )
}
