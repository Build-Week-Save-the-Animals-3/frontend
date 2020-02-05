import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NewsFeed_Card from './NewsFeed_Card';
import server from './server';

export default function NewsFeed() {

    const [campaign, setCampaign]= useState(server);

    // useEffect(()=> {
    //     axios
    //     .get(`https://ptbw-sta-3.herokuapp.com/api/campaigns`)
    //     .then((res)=> {
    //         console.log(res);
    //     })
    //     .catch(err => console.log('This is my error: ', err));

    // }, []);

    return (
        <div className='news-container'>
            <nav className='nav-bar'>
                <Link to='/donations'>Donations</Link>
                <Link to='/oppurtunities'>Oppurtunities</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>

            {campaign.map((card)=> {
                return <NewsFeed_Card key={card.id} data={card} />
            })}


        </div>
    )
}
