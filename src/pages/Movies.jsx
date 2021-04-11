import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import MoviesDashboard from '../components/Dashboard/MoviesDashboard';

function Movies() {
    return (
        <div>
            <Navbar/>
            <Banner/>
			<MoviesDashboard/>
        </div>
    );
}
  
export default Movies;