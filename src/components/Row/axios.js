import axios from 'axios';
const instance=axios.create({
    baseURL:"https://netflix-iti-project.herokuapp.com/",
});

export default instance;