import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import inputSelect from './../common_template/inputSelect';
import inputText from './../common_template/inputText';
import inputTextArea from './../common_template/inputTextArea';
import inputOption from './../common_template/inputRadioOrCheck';

class SectionForm extends Component {

    render() {
        const { action, name, handleSubmit, pristine, submitting } = this.props,
            labelAction = (action === 'update') ? 'Atualizar' : 'Adicionar';
        return (
            <main role="main" id="main">
            <h2>Projetos</h2>
                <section className="bg-white">
                    <h3>{labelAction}</h3>
                    <hr/> 
                    <form role="form" onSubmit={handleSubmit} name={name} encType="multipart/form-data">
                        <div className="row uniform">
                            <Field component={inputSelect} />
                            <Field component={inputText} colsGrid="12u" label="Titulo" type="text" name="title" placeholder="Digite o titulo" maxlength="70" />
                            <Field component={inputText} colsGrid="12u" label="URL Amigável" type="text" name="slug" placeholder="Digite a url amigável" maxlength="70" />
                            <Field component={inputTextArea} colsGrid="12u" label="Palavras Chaves" name="meta_keywords" placeholder="Digite as palavras chave" maxlength="255" />
                            <Field component={inputTextArea} colsGrid="12u" label="Meta Description" name="meta_description" placeholder="Digite uma breve explicação" maxlength="200" />
                            <Field component={inputTextArea} colsGrid="12u" label="Descrição" name="description" placeholder="Digite a descrição" />
                            <Field component={inputText} colsGrid="12u" label="Link do Projeto" type="url" name="link" placeholder="Link do Projeto" maxlength="150" />
                            <Field component={inputText} colsGrid="12u" label="Capa" type="file" name="cover" placeholder="Link do Projeto" maxlength="150" />
                            
                            <div className="12u">
                                <h4>Galeria de imagens</h4>
                            </div>
                            <Field component={inputText} colsGrid="12u" label="Galeria de imagens" type="file" name="gallery" id="gallery_01" placeholder="Link do Projeto" maxlength="150" />
                            <Field component={inputText} colsGrid="12u" label="Galeria de imagens" type="file" name="gallery" id="gallery_02" placeholder="Link do Projeto" maxlength="150" />
                            <Field component={inputText} colsGrid="12u" label="Galeria de imagens" type="file" name="gallery" id="gallery_03" placeholder="Link do Projeto" maxlength="150" />


                            <div className="12u">
                                <h4>Exibição na home</h4>
                            </div>
                            <Field component={inputOption} colsGrid="4u 12u(small)" label="Ativo" type="checkbox" name="highlight" id="highlight" value="1" />

                            <div className="12u">
                                <h4>Status</h4>
                            </div>
                            <Field component={inputOption} colsGrid="4u 12u(small)" label="Ativo" type="radio" name="status" id="userStatusActive" value="1" />
                            <Field component={inputOption} colsGrid="4u 12u(small)" label="Inativo" type="radio" name="status" id="userStatusInactive" value="0" />                    
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