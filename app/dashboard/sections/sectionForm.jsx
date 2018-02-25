import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import inputText from './../common_template/inputText';
import inputTextArea from './../common_template/inputTextArea';
import inputRadio from './../common_template/inputRadioOrCheck';

class SectionForm extends Component {

    render() {
        const { action, formName, handleSubmit, pristine, submitting } = this.props,
            labelAction = (action === 'update') ? 'Atualizar' : 'Adicionar';
        return (
            <main role="main" id="main">
            <h2>Seções</h2>
                <section className="bg-white">
                    <h3>{labelAction}</h3>
                    <hr/> 
                    <form role="form" onSubmit={handleSubmit} name={formName}>
                        <div className="row uniform">
                            <Field component={inputText} colsGrid="12u" label="Titulo" type="text" name="title" placeholder="Digite o titulo" maxlength="70" required />
                            <Field component={inputText} colsGrid="12u" label="URL Amigável" type="text" name="slug" placeholder="Digite a url amigável" maxlength="70" required />
                            <Field component={inputTextArea} colsGrid="12u" label="Palavras Chaves" name="meta_keywords" placeholder="Digite as palavras chave" maxlength="255" required />
                            <Field component={inputTextArea} colsGrid="12u" label="Meta Description" name="meta_description" placeholder="Digite uma breve explicação" maxlength="200" required />
                            <Field component={inputTextArea} colsGrid="12u" label="Descrição" name="description" placeholder="Digite a descrição" maxlength="40" required />
                            <div className="12u">
                                <h4>Status</h4>
                            </div>
                            <Field component={inputRadio} colsGrid="4u 12u(small)" label="Ativo" type="radio" name="status" id="userStatusActive" value="1" required />
                            <Field component={inputRadio} colsGrid="4u 12u(small)" label="Inativo" type="radio" name="status" id="userStatusInactive" value="0" required />                    
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