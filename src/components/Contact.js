import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Button} from 'reactstrap';

function Contact() {
    return (
        <div className='contact-container'>
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
            <form className='contact-form'>
                Contact Information
                <label htmlFor='firstname'>

                    <input 
                    className='input'
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder='first name'
                    />

                </label>
                <label htmlFor='lastname'>

                    <input 
                    className='input'
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="last name"
                    />

                </label>
                <label htmlFor='email'>

                    <input 
                    className='input'
                    id="email"
                    type="text"
                    name="email"
                    placeholder="email@yahoo.com"
                    />

                </label>

                <div className='btn'>
                    <Button>Subscribe</Button>
                </div>
            </form>
        </div>
    )
}

export default Contact


