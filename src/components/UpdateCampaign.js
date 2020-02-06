import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCurrentCampaign } from "../actions/actions";
import { connect } from "react-redux";

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
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" value={campaign.title} name="title" />
            <input onChange={onChange} type="text" value={campaign.description} name="description" />
            <input onChange={onChange} type="text" value={campaign.urgency_level} name="urgency_level" />
            <input onChange={onChange} type="text" value={campaign.location} name="location" />
            <input onChange={onChange} type="text" value={campaign.deadline} name="deadline" />
            <input onChange={onChange} type="text" value={campaign.fund_goal} name="fund_goal" />
            <button type="submit">Update Campaign</button>
            
        </form>
    )
}

export default connect(state => state, { getCurrentCampaign: getCurrentCampaign })(UpdateCampaign);