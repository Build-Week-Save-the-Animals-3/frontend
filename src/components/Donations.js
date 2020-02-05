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
                <h2>Make your donation</h2>
                <div className='btn-container'>
                    <div>
                        <Button>$1</Button>
                    </div>
                    <div>
                        <Button>$3</Button>
                    </div>
                    <div>
                        <Button>$7</Button>
                    </div>
                    <div>
                        <Button>$10</Button>
                    </div>
                    <div>
                        <Button>$15</Button>
                    </div>
                    <div>
                        <Button>$20</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
