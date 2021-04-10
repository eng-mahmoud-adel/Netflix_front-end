import {combineReducers} from 'redux';
import authReducer from './auth';
import profileReducer from './profiles'

const reducer = combineReducers({
    authUser: authReducer,
    profile:profileReducer
});

export default reducer;
