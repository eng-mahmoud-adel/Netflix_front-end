import { NavLink } from "react-router-dom";
import BaseButton from "../../../components/Buttons/Buttons";
import Footer from "../../../components/Footer/Footer";
import OuterNavbar from "../../../components/OuterNavbar/OuterNavbar";
import "./Registration.css";

function Registration() {
    return(
        <div className="registration">
            <div className="mx-3 mx-md-5 mt-3">
                <OuterNavbar logo_login="true" to="/" />
            </div>

            <hr />

            <div className="text-left text-sm-center mx-auto settings">
                <div className="icons mb-4">
                    <i className="fas fa-laptop fa-3x mr-4" style={{color: 'red'}}></i>
                    <i className="fas fa-desktop fa-5x mr-4" style={{color: 'red'}}></i>
                    <i className="fas fa-tablet-alt fa-3x mr-4" style={{color: 'red'}}></i>
                </div>
                <span>STEP <b>1</b> OF <b>3</b></span>
                <h1><b>Finish setting up your account.</b></h1>
                <p>Netflix is personalized for you. Create a password to watch Netflix on any device at any time.</p>
            </div>

            <div className="col-9 col-sm-7 col-md-5 col-lg-4 offset-1 offset-sm-0 mx-sm-auto ml-5 ml-sm-0 button">
                <NavLink to="regform">
                    <BaseButton color="btn-danger" style={{height: '100%'}}>Next</BaseButton>
                </NavLink>
            </div>

            <footer>
                <Footer color="#efefef" >
                    {["FAQ","Help Center","Terms of Use", "Privacy","Cookie Preferences","Corporate Information"]}
                </Footer>
            </footer>
        </div>
    )
}

export default Registration;
