import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCampaigns } from "../actions/actions";
import Campaign from "./Campaign";

function Home(props) {
    
    console.log(props);
    
    useEffect(() => {
        props.getCampaigns();
    }, [])
    
    return (
        <div>
            {props.campaigns.map(i => {
                return (
                    <div>
                        <Campaign id={i.id} key={i.id} title={i.title} location={i.location} description={i.description} species={i.species} urgency={i.urgency} 
                        donations={i.donationsNow} goal={i.campaignGoal} />
                    </div>  
                )
            })}
        </div>
    )
}

const MapStateToProps = state => {
    return {
        campaigns: state.campaigns
    }
}
export default connect(MapStateToProps, { getCampaigns: getCampaigns })(Home);
/*title: "",
            location: "",
            description: "",
            species: "",
            urgency: null,
            donationsNow: null,
            campaignGoal: null*/