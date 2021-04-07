import React from 'react';
import AddProfileForm from './../../components/Forms/AddProfileForm';


const AddProfile = () => {
    return ( 
        <>
        <div style={{backgroundColor:"black"}}>
            <div className="col-12 col-md-9 col-lg-10 col-xl-10 mx-auto py-5" style={{height:"815px",backgroundColor:"black",color:'white'}}>
                <AddProfileForm /> 
            </div>
        </div> 
        </>
     );
}
 
export default AddProfile;