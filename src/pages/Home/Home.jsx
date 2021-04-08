import GetStartedSection from './GetStartedSection/GetStartedSection';
import EnjoySection from './EnjoySection/EnjoySection';
import DownloadSection from './DownloadSection/DownloadSection';
import WatchSection from './WatchSection/WatchSection';
import Footer from "../../components/Footer/Footer";
import Questions from './Questions/Questions';

function Home() {
  return (
    <>
        {/* get-started section */}
        <GetStartedSection />
        {/* get-started section */}

        {/* enjoy section */}
        <EnjoySection />
        {/* enjoy section */}

        {/* download section */}
        <DownloadSection />
        {/* download section */}

        {/* watch section */}
        <WatchSection />
        {/* watch section */}

        {/* questions section */}
        <Questions />
        {/* questions section */}

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
