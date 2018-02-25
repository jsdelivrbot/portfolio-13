import { combineReducers } from 'redux';
import AuthReducer from './../auth/authReducer';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import HomeReducer from './projectsReducer';

import UsersReducer from './../dashboard/users/usersReducer';
import SectionsReducer from './../dashboard/sections/sectionsReducer';
import ProjectsReducer from './../dashboard/projects/projectsReducer';

const rootReducer = combineReducers({
	home: HomeReducer,
	auth: AuthReducer,
	form: formReducer,
	toastr: toastrReducer,
	users: UsersReducer,
	sections: SectionsReducer,
	projects: ProjectsReducer
});

export default rootReducer;