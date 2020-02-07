import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NewsFeed_Card from "./NewsFeed_Card";


function SearchedCampaigns(props) {
    
    if(props.filtered.length < 1 || props.filtered[0].id == null) {
        return (
            <div className='news-container'>
            <nav className='nav-bar'>
                <Link to='/'>Home</Link>
                <Link to='/search'>Search</Link>
            </nav>
            <h3 className="h3update">No results came up from your search.</h3>
        </div>
            
            
        )
    } else return (
        <div className='news-container'>
                <nav className='nav-bar'>
                    <Link to='/'>Home</Link>
                    <Link to='/search'>Search</Link>
                </nav>
                <h3 className="h3update">Here are your search results!</h3>
                {props.filtered.map((card)=> {
                return <NewsFeed_Card key={card.id} data={card} />
            })}

            </div>
            
    )
        
    
}
const MapStateToProps = state => {
    return {
        filtered: state.filteredCampaigns
    }
}
export default connect(MapStateToProps, {})(SearchedCampaigns);