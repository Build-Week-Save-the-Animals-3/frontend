import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { deleteCampaign, getCurrentCampaign } from "../actions/actions";
import "../index.scss";
import { Link, Redirect } from "react-router-dom";


function Campaign(props) {
    console.log(props);
    let loggedIn = localStorage.getItem("token");
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

        if(loggedIn) {
            return (
                <div className='news-container'>
                <nav className='nav-bar'>
                    <Link to='/'>Home</Link>
                    <Link to='/search'>Search Campaigns</Link>
                </nav>
                
                <div className="card-container">
                    <div className="Card">
                        <h1>{props.currentCampaign.title}</h1>
                        <h3>{props.currentCampaign.description}</h3>
                        <div>{props.currentCampaign.urgency_level}</div>
                        <div>{props.currentCampaign.location}</div>
                        <div>{props.currentCampaign.deadline}</div>
                        <div>{props.currentCampaign.fund_goal}</div>
                        <button type="submit" onClick={routeToItem}>Update Campaign</button>
                        <button type="submit" onClick={deleteItem}>Delete Campaign</button>
                    </div>
                    
                </div>
                </div>
            )
        }
        else return <Redirect to="/login" />
}

export default connect(state => state, { deleteCampaign: deleteCampaign, getCurrentCampaign: getCurrentCampaign })(Campaign);
