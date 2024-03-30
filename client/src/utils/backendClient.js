import axios from 'axios';


const backendClient = axios.create({
    baseURL: 'http://localhost:8800/api',
    headers: {
        'gooz': 'shaghighe'
    }
})

export default backendClient