import {LOGIN, SIGNUP, LOGOUT, EMAIL_CHANGED, BAD_REQUEST_400} from '../actions/auth'
// import User from "../../model/User";

const initialState = {
    // user: null,
    isLoggedIn: false,
    accessToken: null,
    user: {
        email: '',
    },
    userCreated: {
        msg: '',
        created: false
    },
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                // user: action.payload,
                // accessToken: action.accessToken
                isLoggedIn: true,
                accessToken: action.payload
            };

        case SIGNUP:
            return {
                ...state,
                userCreated: {
                    msg: action.payload,
                    created: true
                },
                error: null
                // accessToken: action.accessToken
            };
        
        case LOGOUT:
            return {
                ...state,
                // user: null,
                isLoggedIn: false,
                accessToken: null,
            };

        case EMAIL_CHANGED:
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload
                }
            };

        case BAD_REQUEST_400:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};

export default authReducer;
