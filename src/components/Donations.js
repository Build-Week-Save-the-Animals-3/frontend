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
            <section>
                <Jumbotron className='big'>
                    <h2>Get Involved!</h2>
                    <p>Get involved in the movement when you contact us!</p>
                </Jumbotron>
            </section>
        </div>
    )
}
