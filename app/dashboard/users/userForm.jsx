import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import inputForm from './../common_template/inputForm';

class UserForm extends Component {

    render() {
        const { action, handleSubmit, pristine, submitting } = this.props,
            labelAction = (action === 'update') ? 'Atualizar' : 'Adicionar';
        return (
            <main role="main" id="main">
            <h2>Usuário</h2>
                <section className="bg-white">
                    <h3>{labelAction}</h3>
                    <hr/> 
                    <form role="form" onSubmit={handleSubmit}>
                        <div className="row uniform">
                            <Field component={inputForm} cols="12u" label="Nome" type="text" name="name" placeholder="Digite seu Nome" maxlength="150" />
                            <Field component={inputForm} cols="12u" label="E-mail" type="email" name="email" placeholder="Digite seu E-mail" maxlength="50" />
                            <Field component={inputForm} cols="12u" label="Senha" type="password" name="password" placeholder="Digite sua Senha" maxlength="40" />
                            <div className="12u">
                                <h4>Status</h4>
                            </div>
                            <Field component={inputForm} cols="4u 12u(small)" label="Ativo" type="radio" name="status" id="userStatusActive" value="1" />
                            <Field component={inputForm} cols="4u 12u(small)" label="Inativo" type="radio" name="status" id="userStatusInactive" value="0" />                    
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