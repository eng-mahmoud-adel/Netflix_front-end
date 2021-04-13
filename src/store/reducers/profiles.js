import {GetProfiles, GetProfile, AddProfile, UpdateProfile, DeleteProfile ,ErrorCreate, ErrorUpdate} from '../actions/profiles'
import Profile from "../../model/Profile";


const initialState = {
    profiles:[],
    profile: {},
    message:"",
    error:1
    
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetProfile:
            return {
                ...state,
                profile:action.payload,
                error: action.error
            };
        case GetProfiles:
            // console.log(state.profiles);
            return {
                ...state,
                profiles:action.payload,
                error: action.error
            };
        case AddProfile:
            return {
                ...state,
                message:action.payload,
                error: action.error
            };
        case ErrorCreate:
            return {
                ...state,
                error: action.error,
                message:action.payload
            }
        case UpdateProfile:
            return {
                ...state,
                profile:action.payload,
                error: action.error
            };
        case ErrorUpdate:
            return {
                ...state,
                message:action.payload,
                error: action.error
            }
        case DeleteProfile:
            return {
                ...state,
            };
        default:
           return state;
    }
};

export default profileReducer;


