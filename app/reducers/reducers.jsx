import { combineReducers } from 'redux';

import ProjectsReducer from './projectsReducer';

const rootReducer = combineReducers({
	projects: ProjectsReducer
});

export default rootReducer;