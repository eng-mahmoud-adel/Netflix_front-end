import axios from 'axios';
export const PAYMENT = 'PAYMENT';
export const CREATEERROR = 'CREATEERROR';
export const CHOOSEPLAN = 'CHOOSEPLAN';

// const token = localStorage.getItem('token');
const token = 'cd196b8e6991fc2e624db955b8588b57e92bfdb4';

export const payment = (request) => async(dispatch) =>{
    console.log(request);
    await axios.post(`http://127.0.0.1:8000/api/accounts/payment/create`, request, {
        headers: {
          'Authorization': `Token ${token}` 
        }}
        )
        .then(
            (response) => {
                console.log(response);
                dispatch({
                        type: PAYMENT,
                        payload: response.data,
                })
            }
        ).catch((error) => {
            console.error(error);
            dispatch({
                type: CREATEERROR,
                payload: error.data,
        })
          })
}

export const chooseplan = (plan) => async(dispatch) =>{
    console.log(plan);
    dispatch({
        type: CHOOSEPLAN,
        payload: plan
})
}