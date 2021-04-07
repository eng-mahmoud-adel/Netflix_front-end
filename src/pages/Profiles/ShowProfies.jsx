import React from 'react';
import ShowProfilesForm from './../../components/Forms/ShowProfilesForm';


const CreateProfile = () => {
    return ( 
        <>
        <div style={{backgroundColor:"black"}}>
            <div className="col-12 col-md-9 col-lg-10 col-xl-10 mx-auto py-5" style={{height:"815px",backgroundColor:"black",color:'white'}}>
                <ShowProfilesForm /> 
            </div>
        </div> 
        </>
     );
}
 
export default CreateProfile;