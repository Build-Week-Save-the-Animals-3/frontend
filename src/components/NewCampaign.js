import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { submitCampaign } from "../actions/actions";

const initialCampaign = {
    id: Date.now(),
    title: "",
    description: "",
    urgency_level: "",
    location: "",
    deadline: "",
    fund_goal: null,
    completed: false,
}

function NewCampaign(props) {
    const [campaign, setCampaign] = useState(initialCampaign)
    
    const onChange = event => {
        setCampaign({ ...campaign, [event.target.name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault();
        /*axios
            .post("https://ptbw-sta-3.herokuapp.com/api/campaigns", campaign)
            .then(response => {
                console.log(response);
                props.history.push("/");
            })
            .catch(error => {
                console.log(error);
            })*/
        props.submitCampaign(campaign);
        props.history.push("/");
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" name="title" />
            <input onChange={onChange} type="text" name="description" />
            <input onChange={onChange} type="text" name="urgency_level" />
            <input onChange={onChange} type="text" name="location" />
            <input onChange={onChange} type="text" name="deadline" />
            <input onChange={onChange} type="number" name="fund_goal" />
            <button type="submit">Submit Campaign</button>
        </form>
    )
}

export default connect(state => state, { submitCampaign: submitCampaign })(NewCampaign);