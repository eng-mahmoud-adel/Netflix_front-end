import SignupForm from "../../../components/Forms/SignupForm";
import OuterNavbar from "../../../components/OuterNavbar/OuterNavbar";
import Footer from "../../../components/Footer/Footer";
import { connect } from "react-redux";
import { registerUser } from '../../../store/actions/auth';
import './RegistrationForm.css';

function RegistrationForm({userEmail, registerUser, error}) {
    return(
        <div className="regform">
            <div className="mx-3 mx-md-5 mt-3">
                <OuterNavbar logo_login="true" to="/" />
            </div>

            <hr />

            <section className="col-11 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto mt-5 settings">
                <span>STEP <b>1</b> OF <b>3</b></span>
                <h3><b>Create a password to start your membership.</b></h3>
                <p className="mb-0">Just a few more steps and you're done!</p>
                <p>We hate paperwork, too.</p>
                <SignupForm registerUser={registerUser} userEmail={userEmail} error={error} />
            </section>

            <footer>
                <Footer color="#efefef" >
                    {["FAQ","Help Center","Terms of Use", "Privacy","Cookie Preferences","Corporate Information"]}
                </Footer>
            </footer>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userEmail: state.authUser.user.email,
    error: state.authUser.error
});

const mapDispatchToProps = (dispatch) => ({
    registerUser: (request) => {
        dispatch(registerUser(request))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
