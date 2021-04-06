import GetStarted from "../../components/Input/GetStarted";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import OuterNavbar from "../../components/OuterNavbar/OuterNavbar";

function Home() {
  return (
      <>
      <section className="home-section">
        {/* netflix logo */}
            <div className="mx-5 my-4">
                <OuterNavbar logo_login="true" />
            </div>
            {/* netflix logo */}

            {/* background image */}
            <div className="background">
                <img className="h-100 w-100" src="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/5e82ecf0-5873-4e02-8619-2307b8ed65a1/EG-en-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix image"/>
            </div>
            {/* background image */}

            {/* get started */}
            <div className="col-sm-12 col-md-9 col-lg-7 mx-auto text-center get-started">
                <h1><b>Unlimited movies, TV shows, and more.</b></h1>
                <h2 className="mb-4">Watch anywhere. Cancel anytime.</h2>
                <h3 className="mb-3">Ready to watch? Enter your email to create or restart your membership.</h3>
                <GetStarted placeholder="Email Address"></GetStarted>
            </div>
            {/* get started */}
        </section>   

        <footer>
            <Footer color="black" >
                {["FAQ","Help Center", "Account", "Media Center","Investor Relations","Jobs","Ways to Watch","Terms of Use",
                    "Privacy","Cookie Preferences","Corporate Information","Contact Us","Speed Test","Legal Notices","Netflix Originals"]}
            </Footer>
        </footer>
    </>
  );
}

export default Home;
