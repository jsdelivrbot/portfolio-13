import axios from 'axios';

import CONSTS from './../../common/consts';

export function getUsers() {
    const users = `${CONSTS.API_URL}/dashboard/users`,
        request = axios.get(users);

    return {
        type: 'USERS_FETCHED',
        payload: request
    };
}

export function create(values) {
    return submit(values, 'post');
}

export function update(values) {
    return submit(values, 'put');
}

export function remove(values) {
    return submit(values, 'delete');
}

function submit(values, method) {
    return dispatch => {
        axios[method](users, values)
            .then(resp => {

            })
            .catch(e => {

            })
    }
}