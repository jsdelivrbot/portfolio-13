const INITIAL_STATE = {
    projects: [{}]
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SECTIONS_FETCHED':
            return {...state, projects: action.payload.data };
        default:
            return state;
    }
};