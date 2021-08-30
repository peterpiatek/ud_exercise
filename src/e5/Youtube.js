import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',

    params: {
        part: 'snippet',
        maxResults: '8',
        key: 'AIzaSyCQ9SyU3Fgnf_Nz1m9SSHIOEKamvOnNnBg'
    }
})