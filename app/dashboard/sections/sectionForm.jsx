import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import inputForm from './../common_template/inputForm';

class SectionForm extends Component {

    render() {
        const { action, handleSubmit, pristine, submitting } = this.props,
            labelAction = (action === 'update') ? 'Atualizar' : 'Adicionar';
        return (
            <main role="main" id="main">
            <h2>Seções</h2>
                <section className="bg-white">
                    <h3>{labelAction}</h3>
                    <hr/> 
                    <form role="form" onSubmit={handleSubmit}>
                        <div className="row uniform">
                            <Field component={inputForm} colsGrid="12u" label="Titulo" type="text" name="title" placeholder="Digite o titulo" maxlength="70" />
                            <Field component={inputForm} colsGrid="12u" label="URL Amigável" type="text" name="slug" placeholder="Digite a url amigável" maxlength="70" />
                            <Field component={inputForm} colsGrid="12u" label="Palavras Chaves" type="textarea" name="meta_keywords" placeholder="Digite as palavras chave" maxlength="255" />
                            <Field component={inputForm} colsGrid="12u" label="Meta Description" type="textarea" name="meta_description" placeholder="Digite uma breve explicação" maxlength="200" />
                            <Field component={inputForm} colsGrid="12u" label="Descrição" type="textarea" name="description" placeholder="Digite a descrição" maxlength="40" />
                            <div className="12u">
                                <h4>Status</h4>
                            </div>
                            <Field component={inputForm} colsGrid="4u 12u(small)" label="Ativo" type="radio" name="status" id="userStatusActive" value="1" />
                            <Field component={inputForm} colsGrid="4u 12u(small)" label="Inativo" type="radio" name="status" id="userStatusInactive" value="0" />                    
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

SectionForm  = reduxForm({form: 'sectionForm', destroyOnUnmount: false})(SectionForm);
export default SectionForm;