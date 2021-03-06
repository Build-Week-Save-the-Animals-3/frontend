import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCurrentCampaign } from "../actions/actions";
import { connect } from "react-redux";
import "../index.scss";
import { Link } from "react-router-dom";


function UpdateCampaign(props) {
    
    useEffect(() => {
        props.getCurrentCampaign(props.match.params.id);
        
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

            <h3 className="h3update">Edit your campaign information here!</h3>
        
            <form className='input-body' onSubmit={onSubmit}>
                <input className="inputmargin" onChange={onChange} type="text" value={campaign.title} name="title" />
                <input className="inputmargin" onChange={onChange} type="text" value={campaign.description} name="description" />
                <input className="inputmargin" onChange={onChange} type="text" value={campaign.urgency_level} name="urgency_level" />
                <input className="inputmargin" onChange={onChange} type="text" value={campaign.location} name="location" />
                <input className="inputmargin" onChange={onChange} type="text" value={campaign.deadline} name="deadline" />
                <input className="inputmargin" onChange={onChange} type="text" value={campaign.fund_goal} name="fund_goal" />
                <button className="button" type="submit">Update Campaign</button>
                
            </form>
        
        </div>
    )
}

export default connect(state => state, { getCurrentCampaign: getCurrentCampaign })(UpdateCampaign);