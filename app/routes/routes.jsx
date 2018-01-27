import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from './../site/home/home';
import Single from './../site/single/single';
import About from './../site/about/about';
import Contact from './../site/contact/contact';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/single' component={Single} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Redirect from='*' to='/' />
    </Router>
)