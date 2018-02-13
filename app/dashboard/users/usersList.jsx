import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUsers } from './usersActions';

class UsersList extends Component {

    componentWillMount() {
        this.props.getUsers();
    }

    renderUsers() {
        const users = this.props.users.users || [];
        return users.map(user => (
            <tr key={`${user.id}`}>
                <td>{`${user.name}`}</td>
                <td>{`${user.email}`}</td>
                <td>
                    <ul className="actions">
                        <li><button title={`Status: ${(user.status) ? 'Ativo': 'Inativo' }`} className="button small"><span className={`icon ${(user.status) ? 'fa-check': 'fa-times-circle' }`}></span></button></li>
                        <li><button title={`Editar: ${user.name}`} className="button small"><span className="icon fa-edit"></span></button></li>
                        <li><button title={`Excluir: ${user.name}`} className="button small"><span className="icon fa-trash"></span></button></li>
                    </ul>
                </td>
            </tr>
        ));
    }

    render() {
        const title = 'Usuários';
        return (
            <main role="main" id="main">
                <section>
                    <h2>{title}</h2>
                    <ul className="actions vertical">
                        <li>
                            <button className="button">Adicionar</button>
                        </li>
                    </ul>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.renderUsers() } 
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => ({users: state.users});
const mapDispatchToProps = dispatch => bindActionCreators({getUsers}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);