import axiosWithAuth from "../components/axiosAuth";
import axios from "axios";

export const FETCH_SUPPORTER_LOGIN_SUCCESS = "FETCH_SUPPORTER_LOGIN_SUCCESS";
export const FETCH_SUPPORTER_LOGIN_FAILURE = "FETCH_SUPPORTER_LOGIN_FAILURE";
export const FETCH_SUPPORTER_LOGIN_START = "FETCH_SUPPORTER_LOGIN_START";
export const FETCH_ORGANIZATION_LOGIN_SUCCESS = "FETCH_ORGANIZATION_LOGIN_SUCCESS";
export const FETCH_ORGANIZATION_LOGIN_FAILURE = "FETCH_ORGANIZATION_LOGIN_FAILURE";
export const FETCH_ORGANIZATION_LOGIN_START = "FETCH_ORGANIZATION_LOGIN_START";
export const FETCH_CAMPAIGN_SUCCESS = "FETCH_CAMPAIGN_SUCCESS";
export const FETCH_CAMPAIGN_FAILURE = "FETCH_CAMPAIGN_FALURE";
export const FETCH_CAMPAIGN_START = "FETCH_CAMPAIGN_START";
export const SUBMIT_CAMPAIGN_SUCCESS = "SUBMIT_CAMPAIGN_SUCCESS";
export const SUBMIT_CAMPAIGN_FAILURE = "SUBMIT_CAMPAIGN_FAILURE";
export const SUBMIT_CAMPAIGN_START = "SUBMIT_CAMPAIGN_START";
export const EDIT_CAMPAIGN_SUCCESS = "EDIT_CAMPAIGN_SUCCESS";
export const EDIT_CAMPAIGN_FAILURE = "EDIT_CAMPAIGN_FAILURE";
export const EDIT_CAMPAIGN_START = "EDIT_CAMPAIGN_START";
export const DELETE_CAMPAIGN_SUCCESS = "DELETE_CAMPAIGN_SUCCESS";
export const DELETE_CAMPAIGN_FAILURE = "DELETE_CAMPAIGN_FAILURE";
export const DELETE_CAMPAIGN_START = "DELETE_CAMPAIGN_START";
export const REGISTER_ORGANIZATION_SUCCESS = "REGISTER_ORGANIZATION_SUCCESS";
export const REGISTER_ORGANIZATION_FAILURE = "REGISTER_ORGANIZATION_FAILURE";
export const REGISTER_ORGANIZATION_START = "REGISTER_ORGANIZATION_START";
export const REGISTER_SUPPORTER_SUCCESS = "REGISTER_SUPPORTER_SUCCESS";
export const REGISTER_SUPPORTER_FAILURE = "REGISTER_SUPPORTER_FAILURE";
export const REGISTER_SUPPORTER_START = "REGISTER_SUPPORTER_START";
export const FETCH_SINGLE_CAMPAIGN_START = "FETCH_SINGLE_CAMPAIGN_START";
export const FETCH_SINGLE_CAMPAIGN_SUCCESS = "FETCH_SINGLE_CAMPAIGN_SUCCESS";
export const FETCH_SINGLE_CAMPAIGN_FAILURE = "FETCH_SINGLE_CAMPAIGN_FAILURE";
export const FETCH_SEARCH_START = "FETCH_SEARCH_START";
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_FAILURE = "FETCH_SEARCH_FAILURE";
export const DELETE_FILTERED_CAMPAIGNS = "DELETE_FILTERED_CAMPAIGNS";

export const getSupporterLogin = credentials => {
    return dispatch => {
        dispatch({ type: FETCH_SUPPORTER_LOGIN_START});
        axios.post("https://ptbw-sta-3.herokuapp.com/auth/supps/login", credentials)
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_SUPPORTER_LOGIN_SUCCESS, payload: res.data})
                localStorage.setItem("token", res.data.token);
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_SUPPORTER_LOGIN_FAILURE, payload: error})
            })

    }
}

export const getOrganizationLogin = credentials => {
    return dispatch => {
        dispatch({ type: FETCH_ORGANIZATION_LOGIN_START });
        axios.post("https://ptbw-sta-3.herokuapp.com/auth/users/login", credentials)
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_ORGANIZATION_LOGIN_SUCCESS, payload: res.data})
                localStorage.setItem("token", res.data.token);
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_ORGANIZATION_LOGIN_FAILURE, payload: error})
            })
    }
}


export const getCampaigns = () => {
    return dispatch => {
        dispatch({ type: FETCH_CAMPAIGN_START })
        axios
            .get("https://ptbw-sta-3.herokuapp.com/api/campaigns/")
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_CAMPAIGN_SUCCESS, payload: res.data })
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_CAMPAIGN_FAILURE, payload: error })
            })
    }
}

export const submitCampaign = credentials =>  {
    return dispatch => {
        dispatch({ type: SUBMIT_CAMPAIGN_START })
        axios.post("https://ptbw-sta-3.herokuapp.com/api/campaigns", credentials)
            .then(res => {
                console.log(res);
                dispatch({ type: SUBMIT_CAMPAIGN_SUCCESS, payload: res.data })
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: SUBMIT_CAMPAIGN_FAILURE, payload: error})
            })
    }
    
}

export const registerSupporter = credentials => {
    return dispatch => {
        dispatch({ type: REGISTER_SUPPORTER_START });
        axios.post("https://ptbw-sta-3.herokuapp.com/auth/supps/register", credentials)
            .then(res => {
                console.log(res);
                dispatch({ type: REGISTER_SUPPORTER_SUCCESS, payload: res.data})
                
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: REGISTER_SUPPORTER_FAILURE, payload: error})
            })
    }
}

export const registerOrganization = credentials => {
    return dispatch => {
        dispatch({ type: REGISTER_ORGANIZATION_START });
        axios.post("https://ptbw-sta-3.herokuapp.com/auth/users/register", credentials)
            .then(res => {
                console.log(res);
                dispatch({ type: REGISTER_ORGANIZATION_SUCCESS, payload: res.data })
                
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: REGISTER_ORGANIZATION_FAILURE, payload: error})
            })
    }
}

export const deleteCampaign = id => {
    return dispatch => {
        dispatch({ type: DELETE_CAMPAIGN_START })
        axios.delete(`https://ptbw-sta-3.herokuapp.com/api/campaigns/${id}`)
            .then(response => {
                dispatch({ type: DELETE_CAMPAIGN_SUCCESS, payload: response})
            })
            .catch(error => {
                dispatch({ type: DELETE_CAMPAIGN_FAILURE, payload: error})
            })
    }
}

export const getCurrentCampaign = id => {
    return dispatch => {
        dispatch({ type: FETCH_SINGLE_CAMPAIGN_START })
        axios.get(`https://ptbw-sta-3.herokuapp.com/api/campaigns/${id}`)
            .then(res => {
                dispatch({ type: FETCH_SINGLE_CAMPAIGN_SUCCESS, payload: res.data})
            })
            .catch(error => {
                dispatch({ type: FETCH_SINGLE_CAMPAIGN_FAILURE, payload: error})
            })
    }
}

export const getSearchedCampaigns = data => {
    return dispatch => {
        dispatch({ type: FETCH_SEARCH_START })
        if(data.length > 0) {
            return dispatch({ type: FETCH_SEARCH_SUCCESS, payload: data})
        } else return dispatch({ type: FETCH_SEARCH_FAILURE, payload: "The search came up empty!"})
    }
}

export const clearSearchedCampaigns = () => {
    return dispatch => {
        dispatch({ type: DELETE_FILTERED_CAMPAIGNS })
    }
}
