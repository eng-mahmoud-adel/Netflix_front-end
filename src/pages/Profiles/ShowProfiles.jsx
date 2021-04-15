import React from 'react';
import ShowProfilesForm from '../../components/Forms/ShowProfilesForm';
import { connect } from "react-redux";
import { getprofiles, getprofile, deleteprofile } from '../../store/actions/profiles';

const ShowProfiles = ({profiles,getprofiles, getprofile, deleteprofile}) => {
    
    return ( 
        <>
        <div style={{backgroundColor:"black" , height:'2500px',overflow:'visible'}}>
            <div className="col-12 col-md-9 col-lg-10 col-xl-10 mx-auto py-5" style={{height:"815px",backgroundColor:"black",color:'white'}}>
                <ShowProfilesForm profiles={profiles} getprofiles={getprofiles} getprofile={getprofile} deleteprofile={deleteprofile}/> 
            </div>
        </div> 
        </>
     );
}
 
function mapStateToProps(state){
    return {
        profiles:state.profile.profiles,
        error: state.profile.error
    }
};


const mapDispatchToProps = (dispatch) => ({
    getprofiles: () => {
        dispatch(getprofiles())
    },
    getprofile: () => {
        dispatch(getprofile())
    },
    deleteprofile: (request) => {
        dispatch(deleteprofile(request))
    },

});
  
export default connect(mapStateToProps, mapDispatchToProps)(ShowProfiles);
// export default ShowProfiles;
