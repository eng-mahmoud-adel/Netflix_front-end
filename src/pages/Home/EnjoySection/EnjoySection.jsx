import './EnjoySection.css';
import TV from '../../../images/tv.png';

function EnjoySection() {
    return(
        <section className="enjoy-section text-white text-center text-lg-left p-5">
            <div className="row">
                <div className="first-section col-lg-6">
                    <h1><b>Enjoy on your TV.</b></h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>

                <div className="second-section col-lg-6">
                    <img className="w-100" src={TV} alt="tv"/>
                    <div className="video">
                        <video className="w-100 h-100" muted loop autoPlay>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EnjoySection;
