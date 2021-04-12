import React from 'react';
import Row from '../Row/Row';
import requests from './requests';


function SeriesDashboard(){
    return(
       <div style={{background:"black",paddingBottom:"5%"}}>
        <div className="Home">
            
        <Row title="Series" fetchUrl={requests.fetchSeries} isLargeRow />

        </div>
       </div>
    )
}
export default SeriesDashboard;