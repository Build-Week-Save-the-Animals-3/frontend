import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Donations from './Donations';

export default function Campaign(props) {

    const [campaigns, setCampaigns]= useState([]);

    const id= props.match.params.id;

    useEffect(()=> {
        console.log(id);
        axios
        .get(`https://ptbw-sta-3.herokuapp.com/api/campaigns/${id}`)
        .then((res)=> {
            // console.log(res.data);
            setCampaigns(res.data);
        })
        .catch(err => console.log('This is my error: ', err));

    }, []);

    return (
        <div className='campaign-pg'>
            <nav className='nav-bar'>
                <Link to='/'>Newsfeed</Link>
                <Link to='/opportunities'>Opportunities</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>
            <div className='campaign-card'>
                <h2> <span>Campaign:</span> {campaigns.title} </h2>
                <h3> <span>Urgency:</span> {campaigns.urgency_level} </h3>
                <p> <span>Location:</span> {campaigns.location} </p>
                <p> <span>Purpose:</span> {campaigns.description} </p>
                <p> <span>Fund Goal:</span> ${campaigns.fund_goal} </p>
                <p> <span>Dead-line:</span> {campaigns.deadline} </p>
            </div>
            <div>
                <Donations />  
            </div>
        </div>
    )
}
