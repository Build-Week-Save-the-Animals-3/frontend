import React from 'react';
import {Link} from 'react-router-dom';

export default function NewsFeed() {
    return (
        <div className='news-container'>
            <nav className='nav-bar'>
                <Link to='/donations'>Donations</Link>
                <Link to='/oppurtunities'>Oppurtunities</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>
        </div>
    )
}
