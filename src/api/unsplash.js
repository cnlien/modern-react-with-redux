import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 9MWetJ_wrFmUwAhp1BZMSnybpjoP1MHIkhxATGTWMx8'
    }     
});