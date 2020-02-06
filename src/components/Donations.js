import React from 'react';
import {Jumbotron, Button} from 'reactstrap';

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
                <form className='btn-container'>
                    <input id='five' name='five' type='button' value='$5'/>
                    <input id='ten' name='ten' type='button' value='$10'/>
                    <input id='twenty-five' name='twenty-five' type='button' value='$25'/>
                    <input id='one-hundred' name='one-hundred' type='button' value='$100'/>
                    <input
                    className='input'
                    id="donation"
                    type="number"
                    name="donation"
                    min="1" 
                    max="500"
                    placeholder='$ Other amount'
                    />
                    <Button type='submit' className='donate-btn'>Donate</Button>
                </form>
            </section>
        </div>
    )
}
