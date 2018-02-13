import React, { Component } from 'react';

import List from './usersList';
import Form from './userForm';

class Users extends Component {

    render() {
        const { params } = this.props;
            if(params && params.id) {
                return <Form />;
            } else {
                return <List />;
            }
    }
}

export default Users;