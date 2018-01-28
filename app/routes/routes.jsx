import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import Home from './../site/home/home';
import Single from './../site/single/single';
import About from './../site/about/about';
import Contact from './../site/contact/contact';

import Login from './../dashboard/login/login';

import DashboardHome from './../dashboard/home/home';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/single' component={Single} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={DashboardHome}>
            <IndexRoute component={DashboardHome} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)