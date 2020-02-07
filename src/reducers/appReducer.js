import { FETCH_SUPPORTER_LOGIN_SUCCESS, FETCH_SUPPORTER_LOGIN_FAILURE, FETCH_SUPPORTER_LOGIN_START, FETCH_CAMPAIGN_SUCCESS, FETCH_CAMPAIGN_FAILURE, SUBMIT_CAMPAIGN_SUCCESS, 
    SUBMIT_CAMPAIGN_FAILURE, SUBMIT_CAMPAIGN_START, EDIT_CAMPAIGN_SUCCESS, EDIT_CAMPAIGN_FAILURE, EDIT_CAMPAIGN_START, DELETE_CAMPAIGN_START, DELETE_CAMPAIGN_SUCCESS, 
    DELETE_CAMPAIGN_FAILURE, FETCH_ORGANIZATION_LOGIN_SUCCESS, FETCH_ORGANIZATION_LOGIN_FAILURE, FETCH_ORGANIZATION_LOGIN_START, FETCH_CAMPAIGN_START, 
    REGISTER_ORGANIZATION_SUCCESS, REGISTER_ORGANIZATION_FAILURE, REGISTER_ORGANIZATION_START, REGISTER_SUPPORTER_SUCCESS, REGISTER_SUPPORTER_FAILURE,
    REGISTER_SUPPORTER_START, FETCH_SINGLE_CAMPAIGN_FAILURE, FETCH_SINGLE_CAMPAIGN_SUCCESS,  FETCH_SINGLE_CAMPAIGN_START, FETCH_SEARCH_FAILURE,
    FETCH_SEARCH_SUCCESS, FETCH_SEARCH_START, DELETE_FILTERED_CAMPAIGNS } from "../actions/actions";

export const initialState = {
    
    isFetching: false,
    error: "",
    response: "",

    supporter: {
        support: false,
        username: "",
        id: null,
        password: "",
        loggedIn: false,
        token: "",
        loggedIn: false,
        message: ""
        
    },

    organization: {
        org: false,
        id: null,
        name: "",
        password: "",
        token: "",
        loggedIn: false,
        message: ""
    },
    
    campaigns: [
        {
            id: null,
            title: "",
            description: "",
            urgency_level: null,
            location: "",
            deadline: "",
            fund_goal: null,
            completed: false
            
        }
    ],

    currentCampaign: {
        id: null,
            title: "",
            description: "",
            urgency_level: null,
            location: "",
            deadline: "",
            fund_goal: null,
            completed: false
    },

    filteredCampaigns: []

    
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
                    ...state.supporter,
                    support: true,
                    loggedIn: true,
                    message: action.payload.message
                }
            }
            case FETCH_SUPPORTER_LOGIN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
            case FETCH_ORGANIZATION_LOGIN_START:
                return {
                    ...state,
                    isFetching: true
                }
            case FETCH_ORGANIZATION_LOGIN_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    organization: {
                        ...state.organization,
                        org: true,
                        loggedIn: true,
                        message: action.payload.message
                    }
                    
                    
                }
            case FETCH_ORGANIZATION_LOGIN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
            case FETCH_CAMPAIGN_START:
                return {
                    ...state,
                    isFetching: true
                }
            case FETCH_CAMPAIGN_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    campaigns: action.payload
                }
            case FETCH_CAMPAIGN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
            case SUBMIT_CAMPAIGN_START:
                return {
                    ...state,
                    isFetching: true
                }
            case SUBMIT_CAMPAIGN_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    campaigns: [...state.campaigns, action.payload]
                }
            case SUBMIT_CAMPAIGN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
            case REGISTER_SUPPORTER_START:
                return {
                    ...state,
                    isFetching: true
                }
            case REGISTER_SUPPORTER_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    supporter: {
                        ...state.supporter,
                        support: true,
                        id: action.payload.id,
                        email: action.payload.email,
                        password: action.payload.password
                    }
                }
            case REGISTER_SUPPORTER_FAILURE:
                    return {
                        ...state,
                        isFetching: false,
                        error: action.payload
                    }
            case REGISTER_ORGANIZATION_START:
                return {
                    ...state,
                    isFetching: true
                }
            case REGISTER_ORGANIZATION_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    organization: {
                        ...state.organization,
                        org: true,
                        id: action.payload.id,
                        name: action.payload.name,
                        password: action.payload.password
                    }
                }
            case REGISTER_ORGANIZATION_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
            case EDIT_CAMPAIGN_START:
                return {
                    ...state,
                    isFetching: true
                }
            case EDIT_CAMPAIGN_SUCCESS:
                return {
                    ...state,
                    isFetching: false,

                }
            case EDIT_CAMPAIGN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
            case DELETE_CAMPAIGN_START:
                return {
                    ...state,
                    isFetching: true,
                }
            case DELETE_CAMPAIGN_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    response: action.payload,
                    campaigns: [state.campaigns.filter(i => i.id !== action.payload.id)]
                }
            case DELETE_CAMPAIGN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
            case FETCH_SINGLE_CAMPAIGN_START:
                return {
                    ...state,
                    isFetching: true,
                }
            case FETCH_SINGLE_CAMPAIGN_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    currentCampaign: action.payload
                }
            case FETCH_SINGLE_CAMPAIGN_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
            case FETCH_SEARCH_START:
                return {
                    ...state,
                    isFetching: true
                }
            case FETCH_SEARCH_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    filteredCampaigns: action.payload
                }
            case FETCH_SEARCH_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
            case DELETE_FILTERED_CAMPAIGNS:
                return {
                    ...state,
                    filteredCampaigns: []
                }
        default:
            return state;
    }
}