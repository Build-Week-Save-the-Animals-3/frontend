import { FETCH_SUPPORTER_LOGIN_SUCCESS, FETCH_SUPPORTER_LOGIN_FAILURE, FETCH_SUPPORTER_LOGIN_START, FETCH_CAMPAIGN_SUCCESS, FETCH_CAMPAIGN_FAILURE, SUBMIT_CAMPAIGN_SUCCESS, 
    SUBMIT_CAMPAIGN_FAILURE, SUBMIT_CAMPAIGN_START, EDIT_CAMPAIGN_SUCCESS, EDIT_CAMPAIGN_FAILURE, EDIT_CAMPAIGN_START, DELETE_CAMPAIGN_START, DELETE_CAMPAIGN_SUCCESS, 
    DELETE_CAMPAIGN_FAILURE, FETCH_ORGANIZATION_LOGIN_SUCCESS, FETCH_ORGANIZATION_LOGIN_FAILURE, FETCH_ORGANIZATION_LOGIN_START, 
    FETCH_CAMPAIGN_START} from "../actions/actions";

export const initialState = {
    
    isFetching: false,
    error: "",

    supporter: {
        support: false,
        username: "",
        password: "",
        loggedIn: false,
        token: ""
    },

    organization: {
        org: false,
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
        case FETCH_SUPPORTER_LOGIN_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SUPPORTER_LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                supporter: {
                    ...supporter,
                    support: true,
                    loggedIn: true,
                    token: ""
                }
            }
            case FETCH_SUPPORTER_LOGIN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: payload
                }
            case FETCH_ORGANIZATION_LOGIN_START:
                return {
                    ...state,
                    isFetching: true,
                }
            case FETCH_ORGANIZATION_LOGIN_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    organization: {
                        ...organization,
                        org: true,
                        loggedIn: true,
                        token: ""
                    }
                }
            case FETCH_ORGANIZATION_LOGIN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: payload
                }
            case FETCH_CAMPAIGN_START:
                return {
                    ...state,
                    isFetching: true,
                }
            case FETCH_CAMPAIGN_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    campaigns: [payload]
                }
            case FETCH_CAMPAIGN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: payload
                }
            case SUBMIT_CAMPAIGN_START:
                return {
                    ...state,
                    isFetching: true,
                }
            case SUBMIT_CAMPAIGN_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    campaigns: [payload]
                }
            case SUBMIT_CAMPAIGN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: payload
                }
        default:
            return state;
    }
}