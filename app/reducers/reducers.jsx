import { combineReducers } from 'redux';
import AuthReducer from './../auth/authReducer';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import ProjectsReducer from './projectsReducer';

const rootReducer = combineReducers({
	projects: ProjectsReducer,
	auth: AuthReducer,
	form: formReducer,
	toastr: toastrReducer
});

export default rootReducer;