import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import SeriesDashboard from '../components/Dashboard/SeriesDashboard';

function Shows() {
    return (
        <div>
            <Navbar/>
            <Banner/>
			<SeriesDashboard/>
        </div>
    );
}
  
export default Shows;