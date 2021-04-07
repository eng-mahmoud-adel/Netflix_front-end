import GetStartedSection from './GetStartedSection/GetStartedSection';
import EnjoySection from './EnjoySection/EnjoySection';
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
        {/* get-started section */}
            <GetStartedSection />
        {/* get-started section */}

        {/* enjoy section */}
            <EnjoySection />
        {/* enjoy section */}

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
