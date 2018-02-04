import React from 'react';

export default props => (
    <section id="menu" className="is-menu-visible">
            <h1>Future Imperfect</h1>
            <section>
                <ul className="links">
                <li><a href="#dashboard" className="icon fa-home">Dashboard</a></li>
                    <li><a href="#dashboard/users" className="icon fa-users">Usuários</a></li>
                    <li><a href="#dashboard/sections" className="icon fa-list-alt">Seções</a></li>
                    <li><a href="#dashboard/projects" className="icon fa-list-ul">Projetos</a></li>
                </ul>
            </section>

            <section>
                <ul className="actions vertical">
                    <li><a href="#dashboard/logout" className="button big fit">Log out</a></li>
                </ul>
            </section>

    </section>
)