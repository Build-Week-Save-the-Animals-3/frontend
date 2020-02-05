import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron} from 'reactstrap';

function Contact() {
    return (
        <div>
            <nav className='nav-bar'>
                <Link to='/'>Newsfeed</Link>
                <Link to='/donations'>Donations</Link>
                <Link to='/oppurtunities'>Oppurtunites</Link>
            </nav>
            <section>
                <Jumbotron className='big'>
                    <h2>Get Involved!</h2>
                    <p>Get involved in the movement when you contact us!</p>
                </Jumbotron>
            </section>
            <form>
                <label htmlFor='firstname'>
                    First *

                    <input 
                    className='input'
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder='first name'
                    />

                </label>
                <label htmlFor='lastname'>
                    Last *

                    <input 
                    className='input'
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="last name"
                    />

                </label>
            </form>
        </div>
    )
}

export default Contact


