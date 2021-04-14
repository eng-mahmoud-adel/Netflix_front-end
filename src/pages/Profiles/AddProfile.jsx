import React from 'react';
import AddProfileForm from './../../components/Forms/AddProfileForm';
import { connect } from "react-redux";
import { addprofile } from '../../store/actions/profiles';

const AddProfile = ({addprofile, error}) => {
    return ( 
        <>
        <div style={{backgroundColor:"black" , height:'2000px'}}>
            <div className="col-12 col-md-9 col-lg-10 col-xl-10 mx-auto py-5" style={{color:'white'}}>
                <AddProfileForm addprofile={addprofile} error={error}/> 
            </div>
        </div> 
        </>
     );
}

function mapStateToProps(state){
    return {
        error: state.profile.error
    }
};

const mapDispatchToProps = (dispatch) => ({
    addprofile: (request) => {
        dispatch(addprofile(request))
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AddProfile);