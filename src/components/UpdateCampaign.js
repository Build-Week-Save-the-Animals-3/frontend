import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCurrentCampaign } from "../actions/actions";
import { connect } from "react-redux";
import "../index.scss";
import { Link } from "react-router-dom";

const initialCampaign = {
    id: 0,
    title: "",
    description: "",
    urgency_level: "",
    location: "",
    deadline: "",
    fund_goal: undefined,
    completed: false,
    token: ""
}

function UpdateCampaign(props) {
    
    useEffect(() => {
        props.getCurrentCampaign(props.match.params.id);
        
        /*axios
            .get(`https://ptbw-sta-3.herokuapp.com/api/campaigns/${props.match.params.id}`)
            .then(response => {
                console.log(response);
                setCampaign(response.data)
            })
            .catch(error => {
                console.log(error);
            })*/
    }, [])

    const [campaign, setCampaign] = useState(props.currentCampaign);

    

    const onChange = event => {
        setCampaign({...campaign, [event.target.name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault();
        axios
            .put(`https://ptbw-sta-3.herokuapp.com/api/campaigns/${props.match.params.id}`, campaign)
            .then(response => {
                console.log(response);
                setTimeout(() => {
                    props.history.push("/")
                }, 100)
                
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className='news-container'>
            <nav className='nav-bar'>
                <Link to='/opportunities'>Opportunities</Link>
                <Link to='/contact'>Contact Us</Link>
            </nav>
        
        
            <form className='card-container Card' onSubmit={onSubmit}>
                <input className="input" onChange={onChange} type="text" value={campaign.title} name="title" />
                <input className="input" onChange={onChange} type="text" value={campaign.description} name="description" />
                <input className="input" onChange={onChange} type="text" value={campaign.urgency_level} name="urgency_level" />
                <input className="input" onChange={onChange} type="text" value={campaign.location} name="location" />
                <input className="input" onChange={onChange} type="text" value={campaign.deadline} name="deadline" />
                <input className="input" onChange={onChange} type="text" value={campaign.fund_goal} name="fund_goal" />
                <button className="input" type="submit">Update Campaign</button>
                
            </form>
        
        </div>
    )
}

export default connect(state => state, { getCurrentCampaign: getCurrentCampaign })(UpdateCampaign);