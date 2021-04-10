import {GetProfiles, AddProfile, UpdateProfile, DeleteProfile} from '../actions/profiles'
import Profile from "../../model/Profile";


const initialState = {
    profile: {},
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


