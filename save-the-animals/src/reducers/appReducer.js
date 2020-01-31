import { FETCH_SUPPORTER_LOGIN_SUCCESS, FETCH_SUPPORTER_LOGIN_FAILURE, FETCH_SUPPORTER_LOGIN_START, FETCH_CAMPAIGN_SUCCESS, FETCH_CAMPAIGN_FAILURE, FETCH_CAMPAIGN_DATA, SUBMIT_CAMPAIGN_SUCCESS, 
    SUBMIT_CAMPAIGN_FAILURE, SUBMIT_CAMPAIGN_DATA, EDIT_CAMPAIGN_SUCCESS, EDIT_CAMPAIGN_FAILURE, EDIT_CAMPAIGN_DATA, DELETE_CAMPAIGN_SUCCESS, DELETE_CAMPAIGN_FAILURE,
    DELETE_CAMPAIGN_DATA, FETCH_ORGANIZATION_LOGIN_SUCCESS, FETCH_ORGANIZATION_LOGIN_FAILURE, FETCH_ORGANIZATION_LOGIN_START} from "../actions/actions";

export const initialState = {
    
    isFetching: false,
    error: "",

    supporter: {
        support: true,
        username: "",
        password: "",
        loggedIn: false,
        token: ""
    },

    organization: {
        org: true,
        username: "",
        password: "",
        loggedIn: false,
        token: ""
    },
    
    campaigns: [
        {
            title: "",
            location: "",
            description: "",
            species: "",
            urgency: null,
            donationsNow: null,
            campaignGoal: null
        }
    ]
}


export function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}