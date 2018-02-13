import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import { getUsers } from './usersActions';

class UserForm extends Component {

    componentWillMount() {
        this.props.getUsers();
    }

    render() {
        const { params } = this.props,
            title = (params && params.id) ? 'Atualizar' : 'Adicionar';
        
        return (
            <main role="main" id="main">
            <h2>Usuário</h2>
                <section className="bg-white">
                    <h3>{title}</h3>
                    <hr/>
                    <form role="form">
                        <div className="row uniform">
                            <div className="12u">
                                <label htmlFor="userName">Nome</label>
                                <input type="text" name="userName" id="userName" value="" placeholder="Digite seu Nome" />
                            </div>

                            <div className="12u">
                                <label htmlFor="userEmail">E-mail</label>
                                <input type="email" name="userEmail" id="userEmail" value="" placeholder="Digite seu E-mail" />
                            </div>

                            <div className="12u">
                                <label htmlFor="userPassword">Senha</label>
                                <input type="password" name="userPassword" id="userPassword" value="" placeholder="Digite sua Senha" />
                            </div>

                            <div className="12u">
                                <h4>Status</h4>
                            </div>
                            <div className="4u 2u(small)">
                                <input type="radio" id="userStatusActive" name="userStatus" />
                                <label htmlFor="userStatusActive">Ativo</label>
                            </div>

                            <div className="4u 2u(small)">
                                <input type="radio" id="userStatusInactive" name="userStatus" />
                                <label htmlFor="userStatusInactive">Inativo</label>
                            </div>
                           
                            
                        </div>
                    </form>
                    <hr/>
                    <div className="12u">
                        <ul className="actions">
                            <li><button className="button">{title}</button></li>
                        </ul>
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => ({users: state.users});
const mapDispatchToProps = dispatch => bindActionCreators({getUsers}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);