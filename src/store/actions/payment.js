import axios from 'axios';
export const PAYMENT = 'PAYMENT';
export const CREATEERROR = 'CREATEERROR';
export const CHOOSE_PLAN = 'CHOOSEPLAN';

const token = localStorage.getItem('token');

export const payment = (request) => async(dispatch) =>{
    await axios.post(`http://127.0.0.1:8000/api/accounts/payment/create`, request, {
        headers: {
          'Authorization': `Token ${token}` 
        }}
    ).then(
        (response) => {
            dispatch({
                    type: PAYMENT,
                    payload: response.data,
            })
        }
    ).catch((error) => {
        dispatch({
            type: CREATEERROR,
            payload: error.data,
        })
    })
}

export const chooseplan = (plan) => async(dispatch) =>{
    dispatch({
        type: CHOOSE_PLAN,
        payload: plan
    })
}