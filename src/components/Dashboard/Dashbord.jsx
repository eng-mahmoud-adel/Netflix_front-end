import React from 'react';
import Row from '../Row/Row';
import requests from './requests';


function Dashboard(){
    return(
       <div style={{background:"black",paddingBottom:"5%"}}>
        <div className="Home">
            
        <Row title="Movies" fetchUrl={requests.fetchMovies} isLargeRow /> 
        <Row title="Series" fetchUrl={requests.fetchSeries} isLargeRow />

        </div>
       </div>
    )
}
export default Dashboard;