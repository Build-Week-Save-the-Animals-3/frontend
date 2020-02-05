import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron} from 'reactstrap';

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
                    <h2>Help Hope Stay Alive!</h2>
                    <p>With a kind donation you can help empower these organizations</p>
                </Jumbotron>
            </section>
            <section className='donations-container'>

            </section>
        </div>
    )
}
