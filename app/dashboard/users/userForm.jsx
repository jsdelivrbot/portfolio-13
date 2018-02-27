import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import inputText from './../common_template/inputText';
import inputRadio from './../common_template/inputRadioOrCheck';
class UserForm extends Component {

    render() {
        const { action, formName, handleSubmit, pristine, submitting } = this.props,
            labelAction = (action === 'update') ? 'Atualizar' : 'Adicionar';
        return (
            <main role="main" id="main">
            <h2>Usuário</h2>
                <section className="bg-white">
                    <h3>{labelAction}</h3>
                    <hr/> 
                    <form role="form" onSubmit={handleSubmit} name={formName}>
                        <div className="row uniform">

                            <div className="12u">
                                <label htmlFor="name">Nome</label>
                                <Field component="input" id="name" type="text" name="name" placeholder="Digite seu Nome" maxLength="150" required />
                            </div>
                            
                            <div className="12u">
                                <label htmlFor="email">E-mail</label>
                                <Field component="input" id="email" type="email" name="email" placeholder="Digite seu E-mail" maxLength="50" required />
                            </div>

                            <div className="12u">
                                <label htmlFor="password">Nome</label>
                                <Field component="input" id="password"  type="password" name="password" placeholder="Digite sua Senha" maxLength="40" required />
                            </div>

                            <div className="12u">
                                <h4>Status</h4>
                            </div>
                            <div className="4u 12u(small)">
                                <Field component="input" name="status" id="userStatusActive" type="radio" value="1" required />
                                <label htmlFor="userStatusActive">Ativo</label>
                            </div>
                            <div className="4u 12u(small)">
                                <Field component="input" name="status" id="userStatusInactive" type="radio" value="0" required />
                                <label htmlFor="userStatusInactive">Inativo</label>
                            </div> 

                        </div>
                        <hr/>
                        <div className="12u">
                            <ul className="actions">
                                <li><button type="submit" className="button" disabled={pristine || submitting}>{labelAction}</button></li>
                            </ul>
                        </div>
                    </form>
                </section>
            </main>
        );
    }
}

UserForm  = reduxForm({form: 'userForm', destroyOnUnmount: false})(UserForm);
export default UserForm;