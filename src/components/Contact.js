import React from 'react';
import {Link} from 'react-router-dom';

export default function Contact() {
    return (
        <div>
            <nav className='nav-bar'>
                <Link to='/'>Newsfeed</Link>
                <Link to='/donations'>Donations</Link>
                <Link to='/oppurtunities'>Oppurtunites</Link>
            </nav>
        </div>
    )
}
