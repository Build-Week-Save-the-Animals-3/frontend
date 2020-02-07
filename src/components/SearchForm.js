import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getSearchedCampaigns, getCampaigns, clearSearchedCampaigns } from "../actions/actions";

function SearchForm(props) {
    useEffect(() => {
        props.clearSearchedCampaigns();
    }, [])
    setTimeout(() => {
        console.log(props.filtered);
    }, 500)

    const [search, setSearch] = useState({ location: "", species: "", issue: "" })
    const onChange = event => {
        setSearch({ ...search, [event.target.name]: event.target.value });
        
    }
    let searched = props.campaigns.map(i => {
        
        if(i.location.toLowerCase() === search.location.toLowerCase()) {
            return i;
        }
        else if(i.description.toLowerCase() === search.issue.toLowerCase()) {
            return i;
        } 
        else if(i.title.toLowerCase() === search.species.toLowerCase()) {
            return i;
        }
        else return null;
    });

    const onSubmit = event => {
        event.preventDefault();
        
        setTimeout(() => {
            console.log(searched);
        }, 100)
        
        
        props.getSearchedCampaigns(searched);
            
        props.history.push("/searchedform")
       

    }

    return (
        <div className='news-container'>
            <nav className='nav-bar'>
                <Link to='/'>Home</Link>
            </nav>
            <h3 className="h3update">Welcome to the search page! Please search for any campaigns you're currently interested in</h3>
            <form className="input-body" onSubmit={onSubmit}>
                <input className="inputmargin" onChange={onChange} type="text" placeholder="Location" name="location" />
                <input className="inputmargin" onChange={onChange} type="text" placeholder="Species" name="species" />
                <input className="inputmargin" onChange={onChange} type="text" placeholder="Issue" name="issue" />
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    )
}

const MapStateToProps = state => {
    return {
        campaigns: state.campaigns,
        filtered: state.filteredCampaigns
    }
}
export default connect(MapStateToProps, { getSearchedCampaigns: getSearchedCampaigns, getCampaigns: getCampaigns, clearSearchedCampaigns: clearSearchedCampaigns })(SearchForm);