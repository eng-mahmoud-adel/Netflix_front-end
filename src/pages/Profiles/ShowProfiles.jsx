import React from 'react';
import { useState,useEffect } from 'react';
import ShowProfilesForm from '../../components/Forms/ShowProfilesForm';
import { connect } from "react-redux";
import { getprofiles } from '../../store/actions/profiles';

const ShowProfiles = ({profiles,getprofiles}) => {
    
    return ( 
        <>
        <div style={{backgroundColor:"black"}}>
            <div className="col-12 col-md-9 col-lg-10 col-xl-10 mx-auto py-5" style={{height:"815px",backgroundColor:"black",color:'white'}}>
                <ShowProfilesForm profiles={profiles} getprofiles={getprofiles} /> 
            </div>
        </div> 
        </>
     );
}
 
function mapStateToProps(state){
    return {
        profiles:state.profile.profiles,
    }
};


const mapDispatchToProps = (dispatch) => ({
    getprofiles: () => {
        dispatch(getprofiles())
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ShowProfiles);
// export default ShowProfiles;
