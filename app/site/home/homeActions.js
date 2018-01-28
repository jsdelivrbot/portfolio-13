import axios from 'axios';

import CONSTS from './../../common/consts';

export function getProjects() {
    const request = axios.get(`${CONSTS.API_URL}/projects`);

    return {
        type: 'PROJECTS_FETCHED',
        payload: request
    }
}