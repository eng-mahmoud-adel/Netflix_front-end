
const requests={
    fetchMovies:`/api/movies/`,
    fetchSeries:`/api/series/`,
    fetchDramaMovies:`/api/movies/search?name=drama`,
    fetchComedyMovies:`/api/movies/search?name=comedy`,
    fetchActionMovies:`/api/movies/search?name=action`,
    fetchDramaSeries:`/api/series/search?name=drama`,
    fetchComedySeries:`/api/series/search?name=comedy`,
    fetchActionSeries:`/api/series/search?name=action`,

}

// fetchNetflixOriginals:`api/series/`,
export default requests;