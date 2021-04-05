import {LOGIN, LOGOUT, SIGNUP} from '../actions/auth'
// import User from "../../model/User";

const initialState = {
    // user: null,
    isLoggedIn: false,
    accessToken: localStorage.getItem('access_token')
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
        case LOGIN:
            return {
                ...state,
                // user: action.payload,
                // accessToken: action.accessToken
                isLoggedIn: true,
                accessToken: action.accessToken
            };
        
        case LOGOUT:
            return {
                ...state,
                // user: null,
                isLoggedIn: false,
                accessToken: null,
            };

        default:
            return state;
    }
};

export default authReducer;
