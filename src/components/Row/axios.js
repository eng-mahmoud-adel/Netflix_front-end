import axios from 'axios';
const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
// baseURL:"http://127.0.0.1:8000/",
export default instance;