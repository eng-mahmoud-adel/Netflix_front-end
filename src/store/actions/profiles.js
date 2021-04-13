import axios from 'axios';
import Profile from "../../model/Profile";
export const GetProfiles = 'GetProfiles';
export const GetProfile = 'GetProfile';
export const AddProfile = 'AddProfile';
export const UpdateProfile = 'UpdateProfile';
export const DeleteProfile = 'DeleteProfile';

// const token = localStorage.getItem('token');
const token = '86ec5de217db2fed75282bb3709ddd3ac2bf9759';

const profileId =localStorage.getItem('profile_id');


export const getprofiles = () => async(dispatch) =>{
    
    await axios.get(`http://127.0.0.1:8000/api/accounts/profiles/`, {
        headers: {
          'Authorization': `Token ${token}` 
        }}
        )
        .then(
            (response) => {
                dispatch({
                        type: GetProfiles,
                        payload:response.data,
                })

            }
        ).catch((error) => {
            console.error(error);
          })
}

export const getprofile = (id) => async(dispatch) =>{
    
    await axios.get(`http://127.0.0.1:8000/api/accounts/profile/${id || profileId}`, {
        headers: {
          'Authorization': `Token ${token}` 
        }}
        )
        .then(
            (response) => {
                
                dispatch({
                        type: GetProfile,
                        payload:response.data,
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
    console.log(request);
    await axios.put(`http://127.0.0.1:8000/api/accounts/update_delete_profile/${request.id || profileId}`,request, {
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
    console.log(request)
    await axios.delete(`http://127.0.0.1:8000/api/accounts/update_delete_profile/${request}`, {
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
