import {GetProfiles, GetProfile, AddProfile, UpdateProfile, DeleteProfile} from '../actions/profiles'
import Profile from "../../model/Profile";


const initialState = {
    profiles:[],
    profile: {},
    message:"",
    
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetProfile:
            return {
                ...state,
                profile:action.payload,
            };
        case GetProfiles:
            // console.log(state.profiles);
            return {
                ...state,
                profiles:action.payload,
            };
        case AddProfile:
            return {
                ...state,
                message:action.payload
            };
        case UpdateProfile:
            return {
                ...state,
                profile:action.payload,
            };
        case DeleteProfile:
            return {
                ...state,
            };
        default:
           return state;
    }
};

export default profileReducer;


