import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { deleteCampaign, getCurrentCampaign } from "../actions/actions";

const initialCampaign = {
    id: 0,
    title: "",
    description: "",
    urgency_level: "",
    location: "",
    deadline: "",
    fund_goal: null,
    completed: false,
    token: ""
}

function Campaign(props) {
    console.log(props);
    let loggedIn = localStorage.getItem("token");
    const [campaign, setCampaign] = useState(initialCampaign);
    const [donate, setDonate] = useState({});

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

    const routeToItem = event => {
        event.preventDefault();
        props.history.push(`/update-campaign/${props.match.params.id}`)
    }

    const deleteItem = event => {
        event.preventDefault();
        props.deleteCampaign(props.match.params.id);
        setTimeout(() => {
            props.history.push("/");
        }, 200)
        
        /*axios
            .delete(`https://ptbw-sta-3.herokuapp.com/api/campaigns/${props.match.params.id}`)
            .then(response => {
                console.log(response)
                props.history.replace("/")
            })
            .catch(error => {
                console.log(error);
            })*/
        
    }

    const donateToCampaign = event => {
        event.preventDefault();
        axios
            .post("https://ptbw-sta-3.herokuapp.com/api/donations", donate)
            .then(response => {
                console.log(response);
                props.history.push("/")
            })
            .catch(error => {
                console.log(error);
            })

    }

    const onChangeDonate = event => {
        setDonate({ [event.target.name]: event.target.value })
    }

    
        return (
            <div>
                <h1>{props.currentCampaign.title}</h1>
                <h3>{props.currentCampaign.description}</h3>
                <div>{props.currentCampaign.urgency_level}</div>
                <div>{props.currentCampaign.location}</div>
                <div>{props.currentCampaign.deadline}</div>
                <div>{props.currentCampaign.fund_goal}</div>
                <button type="submit" onClick={routeToItem}>Update Campaign</button>
                <button type="submit" onClick={deleteItem}>Delete Campaign</button>
                
            </div>
        )
     /*else {
        return (
            <div>
                <h1>{campaign.title}</h1>
                <h3>{campaign.description}</h3>
                <div>{campaign.urgency_level}</div>
                <div>{campaign.location}</div>
                <div>{campaign.deadline}</div>
                <div>{campaign.fund_goal}</div>
                <form onSubmit={donateToCampaign}>
                    <input onChange={onChangeDonate} type="number" placeholder="Donation" name="amount" />
                    <button type="submit">Donate</button>
                </form>
            </div>
        )
        }*/
}

export default connect(state => state, { deleteCampaign: deleteCampaign, getCurrentCampaign: getCurrentCampaign })(Campaign);
