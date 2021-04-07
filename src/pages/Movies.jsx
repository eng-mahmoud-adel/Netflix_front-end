import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard/Dashbord';

function Movies() {
    return (
        <div>
            <Navbar/>
            <Banner/>
			<Dashboard/>
        </div>
    );
}
  
export default Movies;