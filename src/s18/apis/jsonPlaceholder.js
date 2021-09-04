const axios = require("axios");

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000
})
