import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsFeed_Card from './NewsFeed_Card';
import { connect } from "react-redux";
import { getCampaigns, clearSearchedCampaigns } from "../actions/actions";

function NewsFeed(props) {
    useEffect(()=> {
        props.getCampaigns();
        props.clearSearchedCampaigns();

    }, []);
    if(props.campaigns.length === 0) {
        return (
            <div className='news-container'>
            <nav className='nav-bar'>
                <Link to='/'>Save The Animals</Link>
                <Link to='/search'>Search Campaigns</Link>
            </nav>
            <h3 className="h3update">There are currently no campaigns available.</h3>
            </div>
        )
    } else {
    return (
        <div className='news-container'>
            <nav className='nav-bar'>
                <Link to='/'>Save The Animals</Link>
                <Link to='/search'>Search Campaigns</Link>
            </nav>

            {props.campaigns.map((card)=> {
                return <NewsFeed_Card key={card.id} data={card} />
            })}


        </div>
    
    )}
}

export default connect(state => state, { getCampaigns: getCampaigns, clearSearchedCampaigns: clearSearchedCampaigns })(NewsFeed);