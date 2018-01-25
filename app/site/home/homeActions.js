import axios from 'axios';

const API_URL = 'http://localhost:8080';

export function getProjects() {
    const request = axios.get(`${API_URL}/projects`);

    return {
        type: 'PROJECTS_FETCHED',
        payload: request
    }
}