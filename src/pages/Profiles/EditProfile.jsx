import React from 'react';
import EditProfileForm from './../../components/Forms/EditProfileForm';
import { connect } from "react-redux";
import { updateprofile } from '../../store/actions/profiles';

const EditProfile = (updateprofile) => {
    return ( 
        <>
        <div style={{backgroundColor:"black"}}>
            <div className="col-12 col-md-9 col-lg-10 col-xl-10 mx-auto py-5" style={{height:"815px",backgroundColor:"black",color:'white'}}>
                <EditProfileForm  updateprofile={updateprofile}/> 
            </div>
        </div> 
        </>
     );
}

const mapDispatchToProps = (dispatch) => ({
    updateprofile: (request) => {
        dispatch(updateprofile(request));
        console.log(request);
    }
});
  
export default connect(null, mapDispatchToProps)(EditProfile);