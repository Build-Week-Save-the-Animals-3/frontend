import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NewsFeed_Card from './NewsFeed_Card';

export default function NewsFeed() {

    const [campaign, setCampaign]= useState([]);

    useEffect(()=> {
        axios
        .get(`https://ptbw-sta-3.herokuapp.com/api/campaigns`)
        .then((res)=> {
            console.log(res.data);
            setCampaign(res.data);
        })
        .catch(err => console.log('This is my error: ', err));

    }, []);

    return (
        <div className='news-container'>
            <nav className='nav-bar'>
                <Link to='/opportunities'>Opportunities</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>

            {campaign.map((card)=> {
                return <NewsFeed_Card key={card.id} data={card} />
            })}


        </div>
    )
}
