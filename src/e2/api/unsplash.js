import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    timeout: 1000,
    headers: {'Authorization': 'Client-ID 9LWb0np6k7dgdO9NJgny0OvfYIbEXH28TpJ1q9GZ7yI'}
})