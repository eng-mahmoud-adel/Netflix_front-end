import axios from 'axios';
import Profile from "../../model/Profile";
export const GetProfiles = 'GetProfiles';
export const GetProfile = 'GetProfile';
export const AddProfile = 'AddProfile';
export const UpdateProfile = 'UpdateProfile';
export const DeleteProfile = 'DeleteProfile';
export const ErrorCreate = 'ErrorCreate';
export const ErrorUpdate = 'ErrorUpdate';

const token = localStorage.getItem('token');
const profileId = localStorage.getItem('profile_id');

export const getprofiles = () => async(dispatch) =>{
    
    await axios.get(`https://netflix-iti-project.herokuapp.com/api/accounts/profiles/`, {
        headers: {
          'Authorization': `Token ${token}` 
        }}
    ).then(
        (response) => {
            dispatch({
                type: GetProfiles,
                payload:response.data,
                error:null
            })

        }
    ).catch((error) => {
        console.error(error);
        })
}

export const getprofile = (id) => async(dispatch) =>{
    
    await axios.get(`https://netflix-iti-project.herokuapp.com/api/accounts/profile/${id || profileId}`, {
        headers: {
          'Authorization': `Token ${token}` 
        }}
    ).then((response) => {
            
        dispatch({
            type: GetProfile,
            payload:response.data,
            error:null
        })

    }
    ).catch((error) => {
        console.error(error);
    })
}

export const addprofile = (request) => async(dispatch) =>{
    console.log(request);
    await axios.post(`https://netflix-iti-project.herokuapp.com/api/accounts/create_profile`,request, {
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
                        error:null
                })
            },
            (error) => {
                // console.log(error.response.status)
                dispatch({
                    type: ErrorCreate,
                    payload: `${error}`,
                    error:400
            })
            }
        ).catch((error) => {
            console.log(error);
            dispatch({
                type: ErrorCreate,
                payload: `${error}`,
                error:400
        })
          })
}

export const updateprofile = (request) => async(dispatch) =>{
    console.log(request);
    await axios.put(`https://netflix-iti-project.herokuapp.com/api/accounts/update_delete_profile/${request.id || profileId}`,request, {
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
                        error:null
                })
            },
            (error) => {
                // console.log(error.response.status)
                dispatch({
                    type: ErrorUpdate,
                    payload: `${error}`,
                    error:400
                })
            }
        ).catch((error) => {
            console.log(error);
            dispatch({
                type: ErrorUpdate,
                payload: `${error}`,
            })
          })
}

export const deleteprofile = (request) => async(dispatch) =>{
    console.log(request)
    await axios.delete(`https://netflix-iti-project.herokuapp.com/api/accounts/update_delete_profile/${request}`, {
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
