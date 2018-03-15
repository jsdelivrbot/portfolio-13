import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login, signup } from './../auth/authActions';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { loginMode: true };
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode });
    }

    onSubmit(values) {
        const { login, signup } = this.props;
        this.state.loginMode ? login(values) : signup(values);
    }

    render() {
        const { loginMode } = this.state;
        const { handleSubmit } = this.props;
        return (
            <div id='wrapper' className="login">
        <main role="main" id="main">
        <section className="post">
            <h3>Login</h3>
            <form method="post" onSubmit={handleSubmit(v => this.onSubmit(v))}>
                <div className="row uniform">
                    <div className="6u 12u(xsmall)">
                    <label htmlFor="email">Usuário
                    <Field component="input" type="email" name="email" id="email" value="" placeholder="Digite seu usuário" />
                        </label>
                    </div>
                    <div className="6u 12u(xsmall)">
                    <label htmlFor="password">Senha
                    <Field component="input" type="password" name="password" id="password" value="" placeholder="Digite sua senha" />
                        </label>
                    </div>
                    <div className="12u">
                        <ul className="actions">
                            <li><input type="submit" value="Entrar" /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </section>
        </main>
    </div>
        )
    }
}

Login = reduxForm({ form: 'loginForm' })(Login);
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch);
export default connect(null, mapDispatchToProps)(Login);