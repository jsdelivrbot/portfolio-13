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
                            <Field component={inputText} colsGrid="12u" label="Nome" type="text" name="name" placeholder="Digite seu Nome" maxlength="150" required />
                            <Field component={inputText} colsGrid="12u" label="E-mail" type="email" name="email" placeholder="Digite seu E-mail" maxlength="50" required />
                            <Field component={inputText} colsGrid="12u" label="Senha" type="password" name="password" placeholder="Digite sua Senha" maxlength="40" required />
                            <div className="12u">
                                <h4>Status</h4>
                            </div>
                            <Field component={inputRadio} colsGrid="4u 12u(small)" label="Inativo" type="radio" name="status" id="userStatusInactive" value="0" required />  

                            <div className="4u 12u(small)">
                                <Field name="status" id="userStatusActive" component="input" type="radio" value="1" required />
                                <label htmlFor="userStatusActive">Ativo</label>
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