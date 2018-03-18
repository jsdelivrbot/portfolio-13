import axios from 'axios';

import CONSTS from './../../common/consts';

export function getProjectsSections(slugSection) {
    const request = axios.get(`${CONSTS.API_URL}/sections/${slugSection}`);

    return {
        type: 'SECTIONS_FETCHED',
        payload: request
    }
}