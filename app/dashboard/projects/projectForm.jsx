import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
class ProjectForm extends Component {

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
                        
                        <div className="12u">
                            <label htmlFor="demo-category">demo-category</label>
                            <div className="select-wrapper">
                                <select name="demo-category" id="demo-category">
                                <option value="">- Category -</option>
                                <option value="1">Manufacturing</option>
                                <option value="1">Shipping</option>
                                <option value="1">Administration</option>
                                <option value="1">Human Resources</option>
                                </select>
                            </div>
                        </div>
 
                            <div className="12u">
                                <label htmlFor="title">Titulo</label>
                                <Field component="input" type="text" id="title" name="title" placeholder="Digite o titulo" maxLength="70" required />
                            </div>

                            <div className="12u">
                                <label htmlFor="slug">URL Amigável</label>
                                <Field component="input" type="text" id="slug" name="slug" placeholder="Digite a url amigável" maxLength="70" required />
                            </div>

                            <div className="12u">
                                <label htmlFor="meta_keywords">Palavras Chaves</label>
                                <Field component="textarea" type="text" id="meta_keywords" name="meta_keywords" placeholder="Digite as palavras chave" maxLength="255" required />
                            </div>

                            <div className="12u">
                                <label htmlFor="meta_description">Meta Description</label>
                                <Field component="textarea" type="text" id="meta_description" name="meta_description" placeholder="Digite uma breve explicação" maxLength="200" required />
                            </div>

                             <div className="12u">
                                <label htmlFor="description">Descrição</label>
                                <Field component="textarea" type="text" id="description" name="description" placeholder="Digite a descrição" required />
                            </div>

                            <div className="12u">
                                <label htmlFor="link">Link do Projeto</label>
                                <Field component="textarea" type="url" id="link" name="link" placeholder="Link de publicação do projeto" maxLength="150" required />
                            </div>

                            <div className="12u">
                                <label htmlFor="cover">Capa</label>
                                <Field component="input" type="file" id="cover" name="cover" placeholder="Capa do Projeto" maxLength="150" required />
                            </div>
                            
                            <div className="12u">
                                <label htmlFor="gallery">Galeria de imagens</label>
                                <Field component="input" type="file" id="gallery" name="gallery" placeholder="Galeria do Projeto" maxLength="150" required />
                            </div>

                            <div className="4u 12u(small)">
                                <Field component="input" name="highlight" id="highlight" type="checkbox" value="1" />
                                <label htmlFor="highlight">Exibição na home</label>
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

ProjectForm  = reduxForm({form: 'projectForm', destroyOnUnmount: false})(ProjectForm);
export default ProjectForm;