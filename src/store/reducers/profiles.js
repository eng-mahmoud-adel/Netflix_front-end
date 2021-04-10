import {GetProfiles, AddProfile, UpdateProfile, DeleteProfile} from '../actions/profiles'
import Profile from "../../model/Profile";


const initialState = {
    profile: {},
    message:""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetProfiles:
            return {
                ...state,
                profile:action.payload,
            };
        case AddProfile:
            return {
                ...state,
                message:action.payload
            };
        case UpdateProfile:
            return {
                ...state,

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


