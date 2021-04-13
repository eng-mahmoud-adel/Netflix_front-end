import Navbar from '../components/Navbar/Navbar'
import Series from '../components/Series/Series'
import { Redirect } from 'react-router-dom';

function SeriesPage() {
    
    return (
        <>
            {localStorage.token? 
        <div>
            <Navbar/>
			<Series/>
        </div>
        : 
                <Redirect to="/login"/>
            }
        </>
    );
}
  
export default SeriesPage;