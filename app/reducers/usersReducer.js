const INITIAL_STATE = {
    users: [{}]
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'USERS_FETCHED':
            return {...state, users: action.payload.data };
        default:
            return state;
    }
};