import Footer from "../../../components/Footer/Footer";
import OuterNavbar from "../../../components/OuterNavbar/OuterNavbar";
import './Payment.css';
import { useState } from 'react';
import StripeCheckout from "react-stripe-checkout";

function Payment() {

    const [plan] = useState({
        name: "Basic Plan",
        price: 120,
    });

    const handleToken = (token) => {
       console.log(token.id);
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
                    name={plan.name}
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

export default Payment;