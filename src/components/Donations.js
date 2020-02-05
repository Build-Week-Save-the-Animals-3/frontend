import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Button} from 'reactstrap';

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
                Donate Now
                <form className='btn-container'>
                    <Button>$5</Button>
                    <Button>$10</Button>
                    <Button>$25</Button>
                    <Button>$50</Button>
                    <input 
                    className='input'
                    id="donation"
                    type="number"
                    name="donation"
                    min="1" 
                    max="500"
                    placeholder='$ Other amount'
                    />
                    <Button className='donate-btn'>Donate</Button>
                </form>
            </section>
        </div>
    )
}
