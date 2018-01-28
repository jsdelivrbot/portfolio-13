import React from 'react';

export default props => (
    <div id='wrapper' className="login">
        <main role="main" id="main">
        <section className="post">
            <h3>Login</h3>
            <form method="post" action="#">
                <div className="row uniform">
                    <div className="6u$ 12u$(xsmall)">
                    <label htmlFor="user">Usuário
                        <input type="email" name="user" id="user" value="" placeholder="Digite seu usuário" />
                        </label>
                    </div>
                    <div className="6u$ 12u$(xsmall)">
                    <label htmlFor="pass">Senha
                        <input type="password" name="pass" id="pass" value="" placeholder="Digite sua senha" />
                        </label>
                    </div>
                    <div className="12u$">
                        <ul className="actions">
                            <li><input type="submit" value="Entrar" /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </section>
        </main>
    </div>
);