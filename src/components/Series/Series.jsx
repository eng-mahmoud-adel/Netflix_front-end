import React, { useState, useEffect } from "react";
import "./Series.css";
import { Link } from "react-router-dom";

import axios from "../Row/axios";
import { useParams } from "react-router-dom";
import { Dropdown, DropdownButton, Card } from "react-bootstrap";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [episodes, setEpisodes] = useState();
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  let params = useParams({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/api/series/${params.id}`,{
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`, 
        }});
      const epRequest = await axios.get(
        `/api/episodes/search?sid=${params.id}`
        ,{
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`, 
          }});
      setSeries(request.data);
      let sortedEp = epRequest.data.sort((a, b) => a.seasons - b.seasons);
      let sortedSeason = sortedEp.sort(
        (a, b) => a.episode_number - b.episode_number
      );
      setEpisodes(sortedSeason);
      setFilteredEpisodes(sortedSeason);
      return request;
    }
    fetchData();
  }, []);
  const handleFilter = (season) => {
    let newEpisodes = episodes.filter((elem) => elem.seasons == season);
    setFilteredEpisodes(newEpisodes);
  };
  return (
      <div className="series-info">
        <p className="title"> {series && series.name} </p>
        <p className="description">{series && series.description}</p>
        <p className="seasons">
          {series && series.seasons} Seasons | {series && series.date}
        </p>
        <DropdownButton id="dropdown-basic-button" title="Seasons">
          {Array(series.seasons)
            .fill(0)
            .map((elem, index) => (
              <Dropdown.Item onClick={() => handleFilter(index + 1)}>
                {" "}
                Season {index + 1}{" "}
              </Dropdown.Item>
            ))}
        </DropdownButton>
        <div className="allCard">
          {filteredEpisodes &&
            filteredEpisodes.map((elem) => (
              <Card
                style={{ width: "26rem", background: "black", display: "flex" }}
              >
                <Card.Body>
                  <Link to={`/show/player/${series.id}`}>
                    <Card.Img  src={elem.img} className="img" />
                  </Link>
                  <Card.Title>{elem.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Season {elem.seasons}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
  );
};

export default Series;
