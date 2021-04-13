import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import MoviesDashboard from '../components/Dashboard/MoviesDashboard';
import { Redirect } from 'react-router-dom';

function Movies() {
    return (
        <>
            {localStorage.token? 
                <div>
                    <Navbar/>
                    <Banner/>
                    <MoviesDashboard/>
                </div>
                : 
                <Redirect to="/login"/>
            }
        </>
    );
}
  
export default Movies;