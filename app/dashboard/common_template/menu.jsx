import React from 'react';

export default props => (
    <section id={props.idName}>

        <section>
            <form className="search" method="get" action="#search">
                <input type="text" name="q" placeholder="Search" />
            </form>
        </section>

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
                <li>
                    <button className="button fit icon fa-sign-out">Sair</button>
                </li>
            </ul>
        </section>

    </section>
)