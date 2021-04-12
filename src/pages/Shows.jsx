import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import SeriesDashboard from '../components/Dashboard/SeriesDashboard';
import { Redirect } from 'react-router-dom';

function Shows() {
    return (
        <>
            {localStorage.token? 
        <div>
            <Navbar/>
            <Banner/>
			<SeriesDashboard/>
        </div>
        : 
        <Redirect to="/login"/>
    }
</>
    );
}
  
export default Shows;