import React, { useEffect, useState } from 'react';
import axios from './axios'
import './Row.css'
import Carousel from 'react-elastic-carousel';

const base_url="https://image.tmdb.org/t/p/original/"
const breakPoints=[
    {width:1, itemsToShow:3},
    {width:500, itemsToShow:4},
    {width:768, itemsToShow:5},
    {width:1200, itemsToShow:6},
]

function Row({title,fetchUrl,isLargeRow}){
    const [series,setSeries]=useState([]);


    useEffect(()=>{

       async function fetchData(){
            const request=await axios.get(fetchUrl);
            setSeries(request.data.results)
            return request;
       } 
       fetchData();
    },[fetchUrl])
console.log(series)
    
    return(
        <div className="row d-block mx-0 p-5">
            <h2>{title}</h2>
            
            <div className="row__posters">
            <Carousel breakPoints= {breakPoints}>
                {series.map( serie =>(
                <img
                    key={serie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${base_url}${
                        isLargeRow ? serie.poster_path : serie.backdrop_path}`} 
                    alt={serie.name}
                    />
                ))}
                </Carousel>
            </div>
            
        </div>      
    )
}
export default Row;


/*
import React, {useState,useEffect} from 'react';
import axios from './axios'
import './row.css'

const baseUrl = 'https://image.tmdb.org/t/p/original';
function Row({title,fetchUrl}){
    const [movies, setMovies] = useState([]);
    useEffect(() =>{
        async function fetchData(){
            const request =await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    console.log(movies);
    return(
        <div className="row">
            <h2 className='title'>{title}</h2>
            <div className="row_Posters">
                {movies.map((movie) =>(
                    <img
                    className="row_Poster"
                    src={`${baseUrl}${movie.poster_path}`} 
                    alt={movie.name}
                    key={movie.id} 
                    />
                ))}
            </div>
        </div>
    )
}
export default Row;
*/