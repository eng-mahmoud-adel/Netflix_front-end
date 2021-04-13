import {useParams} from "react-router-dom";
import Row from '../Row/Row';

const Search = (props) => {
    let params = useParams({});
    console.log(params)
    return ( 
        <div style={{background:"black",paddingBottom:"5%"}}>
        <div className="Home">
            
        <Row title={`Movies - ${params.name}`} fetchUrl={`/api/movies/search?name=${params.name}`} isLargeRow /> 
        <Row title={`Series - ${params.name}`} fetchUrl={`/api/series/search?name=${params.name}`} isLargeRow /> 
        </div>
       </div>
    );
}
 
export default Search;
