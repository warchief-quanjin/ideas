import axios from 'axios';

export const Api = {
    instance: () => {
        // let oauth = JSON.parse(sessionStorage.getItem('token'));
        // let authStr = 'Bearer '.concat(oauth);

        return axios.create({
            // headers: { Authorization: authStr },
            baseURL: 'http://localhost:8000/api/',
        });
    }
}