import LoginForm from '../../components/Forms/LoginForm';
import { connect } from "react-redux";
import { login } from '../../store/actions/auth';
import Footer from '../../components/Footer/Footer';
import './Login.css';
import OuterNavbar from '../../components/OuterNavbar/OuterNavbar';
import Interface from '../../images/interface.jpg';
import { Redirect } from 'react-router-dom';

function Login({isLoggedIn, login}) {
    return (
        <>
            {
                isLoggedIn && localStorage.token ?
                <Redirect to="/movies" />
                :
                <div className="login">
                    {/* background image */}
                    <div className="background">
                        <img className="w-100" src={Interface} alt="netflix image"/>
                    </div>
                    {/* background image */}

                    <OuterNavbar left_logo="true" />

                    <div className="col-9 col-md-7 col-lg-5 col-xl-4 mx-auto login-form">
                        <LoginForm login={login} isLoggedIn={isLoggedIn} />
                    </div>
                    
                    <footer>
                        <Footer color="rgba(0,0,0,.75)" >
                            {["FAQ","Help Center","Terms of Use",
                                "Privacy","Cookie Preferences","Corporate Information"]}
                        </Footer>
                    </footer>
                </div>
            }
        </>
    );
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.authUser.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    login: (request) => {
        dispatch(login(request))
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);