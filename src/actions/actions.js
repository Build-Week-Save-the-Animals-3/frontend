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

export const getSupporterLogin = credentials => dispatch => {
    dispatch({ type: FETCH_SUPPORTER_LOGIN_START});
        return function(dispatch) {
            return axiosWithAuth.post("urlhere", credentials)
                .then(res => {
                    console.log(res);
                    dispatch({ type: FETCH_SUPPORTER_LOGIN_SUCCESS, payload: res.data})
                })
                .catch(error => {
                    console.log(error);
                    dispatch({ type: FETCH_SUPPORTER_LOGIN_FAILURE, payload: error})
                })

        }
    }

export const getOrganizationLogin = credentials => dispatch => {
    dispatch({ type: FETCH_ORGANIZATION_LOGIN_START });
    return function(dispatch) {
        return axiosWithAuth.post("urlhere", credentials)
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_ORGANIZATION_LOGIN_SUCCESS, payload: res.data})
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_ORGANIZATION_LOGIN_FAILURE, payload: error})
            })
    }
}

export const getCampaigns = () => dispatch => {
    dispatch({ type: FETCH_CAMPAIGN_START });
    return function(dispatch) {
        return axios.get("urlhere")
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_CAMPAIGN_SUCCESS, payload: res.data})
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_CAMPAIGN_FAILURE, payload: error})
            })
    }
}

export const submitCampaign = credentials => dispatch => {
    dispatch({ type: SUBMIT_CAMPAIGN_START });
    return function(dispatch) {
        return axiosWithAuth.post("urlhere", credentials)
            .then(res => {
                console.log(res);
                dispatch({ type: SUBMIT_CAMPAIGN_SUCCESS, payload: res.data})
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: SUBMIT_CAMPAIGN_FAILURE, payload: error})
            })
    }
}

export const registerSupporter = credentials => dispatch => {
    dispatch({ type: REGISTER_SUPPORTER_START });
    return function(dispatch) {
        return axios.post("urlhere", credentials)
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

export const registerOrganization = credentials => dispatch => {
    dispatch({ type: REGISTER_ORGANIZATION_START });
    return function(dispatch) {
        return axios.post("urlhere", credentials)
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
