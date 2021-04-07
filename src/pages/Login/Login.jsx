import LoginForm from '../../components/Forms/LoginForm';
import { connect } from "react-redux";
import { login } from '../../store/actions/auth';
import Footer from '../../components/Footer/Footer';
import './Login.css';
import OuterNavbar from '../../components/OuterNavbar/OuterNavbar';
import Interface from '../../images/interface.jpg';

function Login({login}) {
    return (
        <>
            <div className="login">
                {/* background image */}
                <div className="background">
                    <img className="w-100" src={Interface} alt="netflix image"/>
                </div>
                {/* background image */}

                <OuterNavbar left_logo="true" />

                <div className="col-9 col-md-7 col-lg-5 col-xl-4 mx-auto login-form">
                    <LoginForm login={login} />
                </div>
                
                <footer>
                    <Footer color="rgba(0,0,0,.75)" >
                        {["FAQ","Help Center","Terms of Use",
                            "Privacy","Cookie Preferences","Corporate Information"]}
                    </Footer>
                </footer>
            </div>
        </>
    );
}

const mapDispatchToProps = (dispatch) => ({
    login: (request) => {
        dispatch(login(request))
    }
});
  
export default connect(null, mapDispatchToProps)(Login);