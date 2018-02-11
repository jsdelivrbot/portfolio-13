import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import Home from './../site/home/home';
import Single from './../site/single/single';
import About from './../site/about/about';
import Contact from './../site/contact/contact';

import Login from './../login/login';

import AuthOrDashboard from './authOrDashboard';

import DashboardHome from './../dashboard/home/home';
import DashboardUsers from './../dashboard/users/users';
import DashboardSections from './../dashboard/sections/sections';
import DashboardProjects from './../dashboard/projects/projects';


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='single' component={Single} />
        <Route path='about' component={About} />
        <Route path='contact' component={Contact} />
        <Route path='login' component={Login} />
        <Route path='dashboard' component={AuthOrDashboard}>
            <IndexRoute component={DashboardHome} />
            <Route path='users' component={DashboardUsers} />
            <Route path='sections' component={DashboardSections} />
            <Route path='projects' component={DashboardProjects} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)