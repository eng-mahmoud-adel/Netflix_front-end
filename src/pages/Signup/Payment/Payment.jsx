import Footer from "../../../components/Footer/Footer";
import OuterNavbar from "../../../components/OuterNavbar/OuterNavbar";
import './Payment.css';
import { useHistory} from "react-router-dom";
import { useState } from 'react';
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { payment } from '../../../store/actions/payment';


function Payment({plan, error, payment}) {
    console.log(plan);
    let history = useHistory();


    const handleToken = () => {
        console.log(plan);
        payment(plan);
        
    }
    if(error === null){
        history.push(`/showprofiles`);
    }
    return(
        <div className="payment">
            <div className="mx-3 mx-md-5 mt-3">
                <OuterNavbar logo_login="true" to="/" />
            </div>

            <hr />

            <section className="col-11 col-sm-7 col-md-6 col-lg-5 col-xl-4 mx-auto mt-5 text-center settings">
                <div className="mb-4">
                    <i className="fas fa-lock text-danger fa-3x"></i>
                </div>

                <span>STEP <b>3</b> OF <b>3</b></span>
                <h3 className="mb-4"><b>Set up your payment.</b></h3>
                <p>Your membership starts as soon as you set up payment.</p>
                <p><b>No commitments.</b></p>
                <p><b>Cancel online anytime.</b></p>
                <StripeCheckout
                    stripeKey="pk_test_51IekVlDXAZQjI1ksNZhrI6hovgFp3sHw9qSR9rXhdgG1hnu4K1UGCLME4TEgTBuRVUBwSqLj5bNW6bflp9gy1A1500HOwEc7nG"
                    token={handleToken}
                    name={plan.plan_type}
                    amount={plan.price * 0.064 * 100}
                />
            </section>

            <footer>
                <Footer color="#efefef" >
                    {["FAQ","Help Center","Terms of Use", "Privacy","Cookie Preferences","Corporate Information"]}
                </Footer>
            </footer>
        </div>
    )
}

function mapStateToProps(state){
    console.log(state);
    return {
        plan:state.payment.plan,
        error:state.payment.error
    }
};

const mapDispatchToProps = (dispatch) => ({
    payment: (request) => {
        dispatch(payment(request))
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Payment);