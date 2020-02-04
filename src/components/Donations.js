import React from 'react';
import {Link} from 'react-router-dom';

export default function Donations() {
    return (
        <div>
            <nav className='nav-bar'>
                <Link to='/'>Newsfeed</Link>
                <Link to='/oppurtunities'>Oppurtunities</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>
        </div>
    )
}
