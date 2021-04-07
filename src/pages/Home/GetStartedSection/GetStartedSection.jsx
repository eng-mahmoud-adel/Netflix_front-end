import OuterNavbar from "../../../components/OuterNavbar/OuterNavbar";
import GetStarted from "../../../components/Input/GetStarted";
import './GetStartedSection.css';
import Interface from '../../../images/interface.jpg';

function GetStartedSection() {
    return(
        <section className="getstarted-section">
            {/* netflix logo */}
            <div className="mx-5 my-4">
                <OuterNavbar logo_login="true" />
            </div>
            {/* netflix logo */}

            {/* background image */}
            <div className="background">
                <img className="h-100 w-100" src={Interface} alt="netflix image"/>
            </div>
            {/* background image */}

            <div className="col-sm-12 col-md-9 col-lg-7 mx-auto text-center get-started">
                <h1><b>Unlimited movies, TV shows, and more.</b></h1>
                <h2 className="mb-4">Watch anywhere. Cancel anytime.</h2>
                <h3 className="mb-3">Ready to watch? Enter your email to create or restart your membership.</h3>
                <GetStarted placeholder="Email Address"></GetStarted>
            </div>
        </section>
    )
}

export default GetStartedSection;
