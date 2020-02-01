import React from 'react';
import {Link} from 'react-router-dom';

export default function NewsFeed() {
    return (
        <div className='news-container'>
            <nav className='nav-bar'>
                <Link>Donations</Link>
                <Link>Opportunities</Link>
                <Link>Contact Us</Link>
            </nav>
        </div>
    )
}
