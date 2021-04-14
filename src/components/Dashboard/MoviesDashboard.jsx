import React from 'react';
import Row from '../Row/Row';
import requests from './requests';


function MoviesDashboard(){
    return(
       <div style={{background:"black",paddingBottom:"5%"}}>
        <div className="Home">
            
        <Row title="Drama" fetchUrl={requests.fetchDramaMovies} isLargeRow /> 
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} isLargeRow /> 
        <Row title="Action" fetchUrl={requests.fetchActionMovies} isLargeRow /> 

        </div>
       </div>
    )
}
export default MoviesDashboard;