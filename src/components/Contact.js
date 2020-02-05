import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron} from 'reactstrap';
import { withFormik, Form, Field } from 'formik';

function Contact({values, errors, touched, status}) {
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
            <Form>
                <label htmlFor='firstname'>
                    First *

                    <Field 
                    className='input'
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder='first name'
                    />

                    {touched.firstname && errors.firstname && (
                    <p className="errors">{errors.firstname}</p>
                    )}

                </label>
                <label htmlFor='lastname'>
                    Last *

                    <Field 
                    className='input'
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="last name"
                    />

                    {touched.lastname && errors.lastname && (
                    <p className="errors">{errors.lastname}</p>
                    )}

                </label>
            </Form>
        </div>
    )
}

const ContactForm= withFormik({mapPropsToValues(props){

}})(Contact);

export default ContactForm;


