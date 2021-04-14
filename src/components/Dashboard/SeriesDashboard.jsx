import React from 'react';
import Row from '../Row/Row';
import requests from './requests';


function SeriesDashboard(){
    return(
       <div style={{background:"black",paddingBottom:"5%"}}>
        <div className="Home">
            
        <Row title="Drama" fetchUrl={requests.fetchDramaSeries} isLargeRow />
        <Row title="Comedy" fetchUrl={requests.fetchComedySeries} isLargeRow />
        <Row title="Action" fetchUrl={requests.fetchActionSeries} isLargeRow />

        </div>
       </div>
    )
}
export default SeriesDashboard;