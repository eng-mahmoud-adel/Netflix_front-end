import Download from '../../../images/download.jpg';
import './DownloadSection.css';

function DownloadSection() {
    return(
        <section className="download-section">
            <div className="row m-0">
                <div className="first-section col-lg-6 order-2 order-lg-1">
                    <img className="w-100" src={Download} alt="download"/>
                </div>

                <div className="second-section col-lg-6 text-center text-lg-left order-1 order-lg-2">
                    <h1><b>Download your shows to watch offline.</b></h1>
                    <p>Save your favorites easily and always have something to watch.</p>
                </div>
            </div>
        </section>
    )
}

export default DownloadSection;
