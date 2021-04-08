import './WatchSection.css';
import Watch from '../../../images/watch.png';

function WatchSection() {
    return(
        <section className="watch-section text-white text-center text-lg-left p-5">
            <div className="row">
                <div className="first-section col-lg-6">
                    <h1><b>Watch everywhere.</b></h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                </div>

                <div className="second-section col-lg-6">
                    <img className="w-100" src={Watch} alt="watch"/>
                    <div className="video">
                        <video className="w-100 h-100" muted loop autoPlay>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WatchSection;
