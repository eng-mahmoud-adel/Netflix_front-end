import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import SearchDashboard from '../components/Dashboard/SearchDashboard';

function Search() {
    return (
        <div>
            <Navbar/>
            <Banner/>
			<SearchDashboard/>
        </div>
    );
}
  
export default Search;