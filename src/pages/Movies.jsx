import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard/Dashbord';
import { Redirect } from 'react-router-dom';

function Movies() {
    return (
        <>
            {localStorage.token? 
                <div>
                    <Navbar/>
                    <Banner/>
                    <Dashboard/>
                </div>
                : 
                <Redirect to="/login"/>
            }
        </>
    );
}
  
export default Movies;