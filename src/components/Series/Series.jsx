import React, { useState, useEffect } from 'react';
import "./Series.css";
import { Link } from 'react-router-dom';

 import axios from '../Row/axios'
 import {useParams} from "react-router-dom";
 import { Dropdown, DropdownButton ,Card} from "react-bootstrap";

 const Series = () => {

    const [series,setSeries]=useState([]);
    const [episodes,setEpisodes] =useState();

    let params = useParams({});

    useEffect(()=>{
       async function fetchData(){
            const request=await axios.get(`/api/series/${params.id}`);
            const epRequest= await axios.get(`/api/episodes/search?sid=${params.id}`);
            setSeries(request.data)
            let sortedEp=epRequest.data.sort((a,b)=>a.seasons-b.seasons)
            let sortedSeason=sortedEp.sort((a,b)=>a.episode_number-b.episode_number)
            setEpisodes(sortedSeason)
            return request;
       } 
       fetchData();
       
    },[])
    let filteredEpisodes;
    const handleFilter =(season)=>{
        filteredEpisodes = episodes.filter(elem=>elem.seasons==season)
        console.log(filteredEpisodes)
        setEpisodes(filteredEpisodes)
    }
    return ( 
        <div>
            <div className="series-info">
                <p>  {series&&series.name} </p>
                <DropdownButton id="dropdown-basic-button" title="Seasons">
                    {Array(2).fill(0).map( (elem,index) => <Dropdown.Item onClick={()=>handleFilter(index+1)} > Season {index+1} </Dropdown.Item>)}
                </DropdownButton>
            <div>
            {episodes && episodes.map(elem=> 
            <Card style={{ width: '18rem' }}>
                <Card.Body>

                    <Card.Title>{elem.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Season {elem.seasons}</Card.Subtitle>
                    <Card.Text>
                    {elem.description}
                    </Card.Text>
                <Link to={`/shows/${series.id}` }> 

                    <Card.Link >Card Link</Card.Link>
                    </Link>
                </Card.Body>

                </Card>
                )}
            

            </div>
            
        </div>
        </div>

     );
}
 
export default Series;