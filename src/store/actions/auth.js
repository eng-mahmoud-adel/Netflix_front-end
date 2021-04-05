import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';

export const login = (request) => async (dispatch) => {

    await axios.post(`http://127.0.0.1:8000/api/accounts/auth/login/`, request)
        .then(
            (response) => {
                console.log(response.data.key);

                // if (request.isRememberMeChecked()) {
                //     //save only the access token locally, and get user data using this key
                //     localStorage.setItem('access_token', response.headers.authorization);

                // } else {
                //     localStorage.removeItem('access_token');
                // }

                dispatch({
                    type: LOGIN,
                    // payload: response.data,
                    // accessToken: response.headers.authorization,
                    accessToken: response.data.key,
                })
            }
        ).catch(error =>  {
            console.log(error)
        });
};

export const registerUser = (request) => async (dispatch) => {
    await axios.post(`api/accounts/signup`, request)
        .then(
            (response) => {
                console.log(response);

                // localStorage.setItem('access_token', response.headers.authorization);

                dispatch({
                    type: SIGNUP,
                    payload: response.data,
                    accessToken: response.headers.authorization,
                });
            }
        )
};

export const logoutUser = () => (dispatch) => {
    // localStorage.removeItem('authUser');
    dispatch({
        type: LOGOUT
    })
};
