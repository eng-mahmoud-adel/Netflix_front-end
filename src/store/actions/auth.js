import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD_CONFIRM = 'RESET_PASSWORD_CONFIRM';
export const BAD_REQUEST_400 = 'BAD_REQUEST_400';

export const login = (request) => async (dispatch) => {
    await axios.post(`http://127.0.0.1:8000/api/accounts/auth/login/`, request)
        .then(
            (response) => {
                localStorage.setItem('token', response.data.key);

                // if (request.isRememberMeChecked()) {
                //     //save only the access token locally, and get user data using this key
                //     localStorage.setItem('token', response.data.key);

                // } else {
                //     localStorage.removeItem('token');
                // }

                dispatch({
                    type: LOGIN,
                    payload: response.data.key,
                })
            },
        ).catch(error =>  {
            console.log(error)
        });
};

export const registerUser = (request) => async (dispatch) => {
    await axios.post(`http://127.0.0.1:8000/api/accounts/auth/register/`, request)
        .then(
            (response) => {
                // localStorage.setItem('access_token', response.headers.authorization);
                dispatch({
                    type: SIGNUP,
                    payload: response.statusText,
                    error: response.status
                });
            },
            (error) => {
                dispatch({
                    type: BAD_REQUEST_400,
                    payload: error.response.status
                });
            }
        ).catch(error =>  {
            console.log(error)
        });
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: LOGOUT
    })
};

// that will take email from home page at getstarted section and will be shown in singup form
export const changeEmail = (email) => (dispatch) => {
    dispatch({
        type: EMAIL_CHANGED,
        payload: email
    })
};

export const forgotPassword = (email) => async (dispatch) => {
    await axios.post(`http://localhost:8000/api/accounts/auth/password/reset/`, email)
    .then(
        (response) => {
            dispatch({
                type: FORGOT_PASSWORD,
                payload: response.data
            });
    });
}

export const resetPasswordConfirm = (request) => async (dispatch) => {
    await axios.post(`http://localhost:8000/api/accounts/auth/password/reset/confirm/`, request)
    .then(
        (response) => {
            dispatch({
                type: RESET_PASSWORD_CONFIRM,
                payload: response.data
            });
    });
};