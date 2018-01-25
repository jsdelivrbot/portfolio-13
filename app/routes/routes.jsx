import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from './../site/home/home';
import Single from './../site/single/single';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/single' component={Single} />
        <Redirect from='*' to='/' />
    </Router>
)