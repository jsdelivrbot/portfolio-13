import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';

import CONSTS from './../../common/consts';

const INITIAL_VALUES = {};

const users = `${CONSTS.API_URL}/dashboard/users`;

export function getUsers() {
    const request = axios.get(users);

    return {
        type: 'USERS_FETCHED',
        payload: request
    };
}

// export function handleSendData(values) {
//     console.log('handleSendData -> ', values)
//         //return submit(values, 'post');
// }

export function create(values) {
    return submit(values, 'post');
}

export function updateStatus(values) {
    const data = values;
    data.status = (data.status === 1) ? 0 : 1;
    return submit(data, 'put');
}

export function update(values) {
    return [
        initialize('userForm', values)
    ];
    //return submit(values, 'put');
}

export function remove(values) {
    return submit(values, 'delete');
}

function submit(values, method) {
    return dispatch => {
        const id = (values.id && method === 'delete') ? `/${values.id }` : '';

        axios[method](`${users}${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
                window.location.href = '#/dashboard/users';
            })
            .catch(error => {
                console.log(error)
                toastr.error('Erro', error);
            })
    };
}

export function init(INITIAL_VALUES) {
    return [
        getUsers(),
        initialize('userForm', INITIAL_VALUES)
    ]
}