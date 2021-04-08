import BaseAccordion from "../../../components/Accordion/Accordion";
import GetStarted from "../../../components/Input/GetStarted";
import './Questions.css';

function Questions() {
    return(
        <section className="questions-section text-white">
            <div className="first-section col-sm-8 mx-auto">
                <h1 className="text-center mb-5"><b>Frequently Asked Questions</b></h1>
                <BaseAccordion header="What is Netflix?" body="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." body2="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!" />
                <BaseAccordion header="How much does Netflix cost?" body="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP120 to EGP200 a month. No extra costs, no contracts." />
                <BaseAccordion header="Where can I watch?" body="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." body2="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." />
                <BaseAccordion header="How do I cancel?" body="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." />
                <BaseAccordion header="What can I watch on Netflix?" body="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." />
            </div>

            <div className="second-section col-sm-6 mx-auto">
                <h3 className="mb-3 text-center">Ready to watch? Enter your email to create or restart your membership.</h3>
                <GetStarted placeholder="Email Address"></GetStarted>
            </div>
        </section>
    )
}

export default Questions;
