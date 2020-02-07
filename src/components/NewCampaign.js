import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { submitCampaign } from "../actions/actions";
import axiosWithAuth from "../components/axiosAuth";
import { Link } from "react-router-dom";

const initialCampaign = {
    title: "",
    description: "",
    urgency_level: "",
    location: "",
    deadline: "",
    fund_goal: 0,
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
        <div className='news-container'>
            <nav className='nav-bar'>
                <Link to='/'>Home</Link>
            </nav>
            <h3 className="h3update">Create New Campaign</h3>
            <form className="input-body" onSubmit={onSubmit}>
                <input className="inputmargin" onChange={onChange} type="text" name="title" placeholder="Title" />
                <input className="inputmargin" onChange={onChange} type="text" name="description" placeholder="Description" />
                <input className="inputmargin" onChange={onChange} type="text" name="urgency_level" placeholder="Urgency Type" />
                <input className="inputmargin" onChange={onChange} type="text" name="location" placeholder="Location" />
                <input className="inputmargin" onChange={onChange} type="text" name="deadline" placeholder="Deadline Date" />
                <input className="inputmargin" onChange={onChange} type="number" name="fund_goal" placeholder="Fund Goal" />
                <button className="button" type="submit">Submit Campaign</button>
            </form>
        </div>
    )
}

export default connect(state => state, { submitCampaign: submitCampaign })(NewCampaign);