import React from 'react';
import EditProfileForm from './../../components/Forms/EditProfileForm';
import { connect } from "react-redux";
import { updateprofile ,getprofile } from '../../store/actions/profiles';

const EditProfile = ({updateprofile ,getprofile , profile, match, error}) => {
    console.log(profile)
    const id = match.params.id;
    return ( 
        <>
        <div style={{backgroundColor:"black"}}>
            <div className="col-12 col-md-9 col-lg-10 col-xl-10 mx-auto py-5" style={{height:"815px",backgroundColor:"black",color:'white'}}>
            <EditProfileForm profile={profile} getprofile={getprofile} updateprofile={updateprofile} id={id} error={error}/> 
            </div>
        </div> 
        </>
     );
}

function mapStateToProps(state){
    console.log(state.profile.profile);
    return {
        profile:state.profile.profile,
        error: state.profile.error
    }
};
const mapDispatchToProps = (dispatch) => ({
    getprofile: (id) => {
        dispatch(getprofile(id))
    },
    updateprofile: (request) => {
        dispatch(updateprofile(request));
        console.log(request);
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);