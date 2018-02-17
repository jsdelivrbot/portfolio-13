const INITIAL_STATE = {
    users: [{}],
    action: 'list'
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {

        case 'USERS_FETCHED':
            return {...state, users: action.payload.data };

        case 'ACTION_TYPE':
            return {...state, action: action.payload }

        default:
            return state;
    }
};