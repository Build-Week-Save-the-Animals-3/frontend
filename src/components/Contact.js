import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Button} from 'reactstrap';

function Contact() {


    const [contact, setContact]= useState('');

    const handleChanges= event=> {
        event.preventDefault();
        setContact(event.target.value);
        console.log(event.target.value);
    }


    return (
        <div className='contact-cont'>
            <nav className='nav-bar'>
                <Link to='/'>Newsfeed</Link>
                <Link to='/opportunities'>Opportunites</Link>
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
                    onChange={handleChanges} 
                    className='input'
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder='first name'
                    />

                </label>
                <label htmlFor='lastname'>

                    <input 
                    onChange={handleChanges}
                    className='input'
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="last name"
                    />

                </label>
                <label htmlFor='email'>

                    <input 
                    onChange={handleChanges}
                    className='input'
                    id="email"
                    type="text"
                    name="email"
                    placeholder="email@yahoo.com"
                    />

                </label>

                <div className='btn'>
                    <Button type='submit'>Subscribe</Button>
                </div>
            </form>
        </div>
    )
}

export default Contact


