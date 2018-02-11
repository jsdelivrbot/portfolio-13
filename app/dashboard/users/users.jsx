import React, { Component } from 'react';
import Header from './../common_template/header';
import Sidebar from './../common_template/sidebar';

class Users extends Component {

    componentWillMount() {

    }

    render() {
        const title = 'Usuários';
        return (
            <main role="main" id="main">
                <section>
                    <h3>{title}</h3>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Item One</td>
                                    <td>Ante turpis integer aliquet porttitor.</td>
                                    <td>
                                        <ul className="actions">
                                            <li><button title="Status: Ativo" className="button small"><span className="icon fa-check"></span></button></li>
                                            <li><button title="Editar: " className="button small"><span className="icon fa-edit"></span></button></li>
                                            <li><button title="Excluir: " className="button small"><span className="icon fa-trash"></span></button></li>
                                        </ul>
                                    </td>
                                </tr>
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

export default Users;