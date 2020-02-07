import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSearchedCampaigns, getCampaigns, clearSearchedCampaigns } from "../actions/actions";

function SearchForm(props) {
    useEffect(() => {
        props.clearSearchedCampaigns();
    }, [])

    const [search, setSearch] = useState({ location: "", species: "", issue: "" })
    const onChange = event => {
        setSearch({ ...search, [event.target.name]: event.target.value });
        
    }
    let searched = props.campaigns.filter(i => {
        if(i.location === search.location) {
            return i;
        }
        else if(i.description === search.issue) {
            return i;
        } 
        else if(i.title === search.species) {
            return i;
        }
        else return null;
    });

    const onSubmit = event => {
        event.preventDefault();
        
        setTimeout(() => {
            props.getSearchedCampaigns(searched);
        }, 50)

        setTimeout(() => {
            props.history.push("/searchedresults")
        }, 300)
        


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