import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from './usersList';
import Form from './userForm';
import { create, update } from './usersActions';

class Users extends Component {

    componentWillMount() {

    }
    
    render() {
        const { params} = this.props,
        action = params.action,
        id = params.id;
        console.log('this.props -> ', this.props)
        if(action) {
            return <Form onSubmit={this.props[action]} action={action} id={id} />;
        } else {
            return <List />;
        };
        
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    create, update
}, dispatch);
export default connect(null, mapDispatchToProps)(Users);