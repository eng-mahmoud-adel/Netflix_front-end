import OuterNavbar from "../../../components/OuterNavbar/OuterNavbar";
import Footer from "../../../components/Footer/Footer";
import BaseButton from '../../../components/Buttons/Buttons';
import { NavLink } from "react-router-dom";
import './Signup.css';

function Signup() {
    return(
        <div className="signup">
            <div className="mx-3 mx-md-5 mt-3">
                <OuterNavbar logo_login="true" to="/" />
            </div>

            <hr />

            <section className="col-11 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto mt-5 text-center settings">
                <div className="mb-4">
                    <i className="far fa-check-circle text-danger fa-3x"></i>
                </div>

                <span>STEP <b>2</b> OF <b>3</b></span>
                <h3 className="mb-4"><b>Choose your plan.</b></h3>
                <p>
                    <i className="fas fa-check text-danger mr-3"></i>
                    No commitments, cancel anytime.
                </p>

                <p>
                    <i className="fas fa-check text-danger mr-3"></i>
                    Everything on Netflix for one low price.
                </p>

                <p>
                    <i className="fas fa-check text-danger mr-3"></i>
                    Unlimited viewing on all your devices.
                </p>

                <NavLink to="planform" style={{width: '100%'}}>
                    <BaseButton color="btn-danger">See the Plans</BaseButton>
              </NavLink>
            </section>

            <footer>
                <Footer color="#efefef" >
                    {["FAQ","Help Center","Terms of Use", "Privacy","Cookie Preferences","Corporate Information"]}
                </Footer>
            </footer>
        </div>
    )
}

export default Signup;
