import axios from "axios";
const KEY = 'AIzaSyCQ9SyU3Fgnf_Nz1m9SSHIOEKamvOnNnBg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    timeout: 1000,
    params: {
        key: KEY
    }
})
