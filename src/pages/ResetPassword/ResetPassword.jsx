import OuterNavbar from '../../components/OuterNavbar/OuterNavbar';
import Footer from '../../components/Footer/Footer';
import Interface from '../../images/interface.jpg';
import ResetPasswordForm from '../../components/Forms/ResetPasswordForm';
import './ResetPassword.css';
import { connect } from 'react-redux';
import { forgotPassword, resetPasswordConfirm } from '../../store/actions/auth';

function ResetPassword({forgotPassword, resetPasswordConfirm, forgotPasswordMsg, forgotPasswordError}) {
    return(
        <div className="reset-password">
            {/* background image */}
            <div className="background">
                <img className="w-100" src={Interface} alt="netflix image"/>
            </div>
            {/* background image */}

            <OuterNavbar left_logo="true" />

            <div className="col-11 col-md-7 col-lg-5 col-xl-4 mx-auto reset-password-form">
                <ResetPasswordForm forgotPassword={forgotPassword} resetPasswordConfirm={resetPasswordConfirm} forgotPasswordMsg={forgotPasswordMsg} forgotPasswordError={forgotPasswordError} />
            </div>
            
            <footer>
                <Footer color="rgba(0,0,0,.75)" >
                    {["FAQ","Help Center","Terms of Use",
                        "Privacy","Cookie Preferences","Corporate Information"]}
                </Footer>
            </footer>
        </div>
    )
}

const mapStateToProps = (state) => ({
    forgotPasswordMsg: state.authUser.forgotPasswordMsg,
    forgotPasswordError: state.authUser.forgotPasswordError
});

const mapDispatchToProps = (dispatch) => ({
    forgotPassword: (email) => {
        dispatch(forgotPassword(email))
    },
    resetPasswordConfirm: (request) => {
        dispatch(resetPasswordConfirm(request))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);