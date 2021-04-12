import axios from 'axios';
import Profile from "../../model/Profile";
export const GetProfiles = 'GetProfiles';
export const AddProfile = 'AddProfile';
export const UpdateProfile = 'UpdateProfile';
export const DeleteProfile = 'DeleteProfile';

// const token = localStorage.getItem('access_token');
const token = 'c60607d04ca28bdb04f8a738968d1f5d59ba9dab';
// const profileId =localStorage.getItem('profile_id');

export const getprofiles = () => async(dispatch) =>{

    await axios.get(`http://127.0.0.1:8000/api/accounts/profiles/`, {
        headers: {
          'Authorization': `Token ${token}` 
        }}
        )
        .then(
            (response) => {
                console.log(response.data);
                dispatch({
                        type: GetProfiles,
                        payload: response.data,
                })
            }
        ).catch((error) => {
            console.error(error);
          })
}


export const addprofile = (request) => async(dispatch) =>{
    console.log(request);
    await axios.post(`http://127.0.0.1:8000/api/accounts/create_profile`,request, {
        headers: {
          'Authorization': `Token ${token}` 
        }}
        )
        .then(
            (response) => {
                console.log(response);
                dispatch({
                        type: AddProfile,
                        payload: response.data,
                })
            }
        ).catch((error) => {
            console.error(error);
          })
}

export const updateprofile = (request) => async(dispatch) =>{
    
    await axios.put(`http://127.0.0.1:8000/api/accounts/update_delete_profile/${request.id}`,request, {
        headers: {
          'Authorization': `Token ${token}` 
        }}
        )
        .then(
            (response) => {
                console.log(response.data);
                dispatch({
                        type: UpdateProfile,
                        payload: response.data,
                })
            }
        ).catch((error) => {
            console.error(error);
          })
}

export const deleteprofile = (request) => async(dispatch) =>{
    
    await axios.delete(`http://127.0.0.1:8000/api/accounts/update_delete_profile/${request.id}`, {
        headers: {
          'Authorization': `Token ${token}` 
        }}
        )
        .then(
            (response) => {
                console.log(response.data);
                dispatch({
                        type: DeleteProfile,
                        payload: response.data,
                })
            }
        ).catch((error) => {
            console.error(error);
          })
}
