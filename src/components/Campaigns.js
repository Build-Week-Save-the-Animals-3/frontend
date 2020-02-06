import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

function Campaigns(props) {

    return (
        <Link className="link" to={`/campaign/${props.id}`}>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <div>{props.urgency}</div>
            <div>{props.location}</div>
            <div>{props.deadline}</div>
            <div>{props.fund}</div>
        </Link>

            
    )
}

export default Campaigns;