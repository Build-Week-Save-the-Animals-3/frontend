import React from 'react';
import {Link} from 'react-router-dom';

export default function Opportunities() {
    return (
        <div className='opp-container'>
            <nav className='nav-bar'>
                <Link to='/'>Newsfeed</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>
            <div className='bg-img'></div>
            <section>
                <h2>Would you like to help in your community?</h2>
            </section>
            <hr/>
            <section className='rallies-sec'>
                <div className='rallies'>
                    <div className='info-box'>
                        <div>
                            <h3><i className="fas fa-bullhorn"></i> Rallies</h3>
                            <p>Be the voice in your community helping to make a difference on the front lines of conservation efforts!</p>
                        </div>
                    </div>
                    <div>
                        <img className='hands' src='https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' alt='hands together in a circle'/>
                    </div>
                </div>
            </section>
            <hr/>
            <section>
                <h2 className='signUp'><Link to='/contact'>SIGN UP NOW</Link></h2>
                <p className='signUp-p'>Receive real-time updates on what's going on in your community or wherever you are when you stay connected.</p>
            </section>
        </div>
    )
}
