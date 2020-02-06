import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import {Form, Input} from 'reactstrap';

export default function Donations() {
    return (
        <div className='donation-pg'>
            {/* <nav className='nav-bar'>
                <Link to='/'>Newsfeed</Link>
                <Link to='/opportunities'>Opportunities</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav> */}
            <section>
                <Jumbotron className='big'>
                    <h2>Help Hope Stay Alive!</h2>
                    <p>With a kind donation you can help empower this organization</p>
                </Jumbotron>
            </section>
            <section className='donations-container'>
                Donate Now
                <Form className='btn-container'>
                    <Input id='five' name='five' type='button' value='$5'/>
                    <Input id='ten' name='ten' type='button' value='$10'/>
                    <Input id='twenty-five' name='twenty-five' type='button' value='$25'/>
                    <Input id='one-hundred' name='one-hundred' type='button' value='$100'/>
                    <Input
                    className='input'
                    id="donation"
                    type="number"
                    name="donation"
                    min="0" 
                    max="100000" 
                    step="5"
                    placeholder='$ Other amount'
                    />
                    <Button type='submit' className='donate-btn'>Donate</Button>
                </Form>
            </section>
        </div>
    )
}
