import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCampaigns } from "../actions/actions";
import Campaigns from "./Campaigns";

function Home(props) {
    
    useEffect(() => {
        props.getCampaigns();
    }, [])
     
    
     console.log(props);

    return (
        
        <div>
            {props.campaigns.map(i => {
                return (
                    <Campaigns id={i.id} key={i.id} title={i.title} location={i.location} description={i.description} urgency={i.urgency_level} 
                    deadline={i.deadline} fund={i.fund_goal} completed={i.completed} />
                      
                )
            })}
            
        </div>
        
    )
    
}


export default connect(state => state, { getCampaigns: getCampaigns })(Home);
