import React from 'react';
import {Card} from 'reactstrap';
import {Link} from 'react-router-dom';
import "../index.scss";

export default function NewsFeed_Card(props) {
    
    return (
        <div className='card-container'>
            <Link to={`/campaign/${props.data.id}`} className='card-link'>
                <Card className='Card'>
                    <h3><span>Campaign:</span> {props.data.title} </h3>
                    <p> <span>Location:</span> {props.data.location} </p> 
                    <p> <span>Purpose:</span> {props.data.description} </p>
                    <p> <span>Urgency:</span> {props.data.urgency_level} </p>
                    <p> <span>Fund Goal:</span> ${props.data.fund_goal} </p> 
                    <p> <span>Deadline:</span> {props.data.deadline} </p> 
                </Card>
            </Link>
        </div>
    )
}

