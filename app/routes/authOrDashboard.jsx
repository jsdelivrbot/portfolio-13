import React, { Component } from 'react';
import Dashboard from './../dashboard/dashboard';

class AuthOrDashboard extends Component {

    componentWillMount() {

    }

    render() {
        return <Dashboard>{this.props.children}</Dashboard>
    }

}

export default AuthOrDashboard;
