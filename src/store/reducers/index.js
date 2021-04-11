import {combineReducers} from 'redux';
import authReducer from './auth';
import profileReducer from './profiles';
import paymentReducer from './payment';

const reducer = combineReducers({
    authUser: authReducer,
    profile: profileReducer,
    payment: paymentReducer,
});

export default reducer;
