import SignupForm from "../../../components/Forms/SignupForm";
import OuterNavbar from "../../../components/OuterNavbar/OuterNavbar";
import Footer from "../../../components/Footer/Footer";
import './RegistrationForm.css';

function RegistrationForm() {
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
                <SignupForm />
            </section>

            <footer>
                <Footer color="#efefef" >
                    {["FAQ","Help Center","Terms of Use", "Privacy","Cookie Preferences","Corporate Information"]}
                </Footer>
            </footer>
        </div>
    )
}

export default RegistrationForm;
