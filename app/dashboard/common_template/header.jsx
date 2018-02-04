import React from 'react'

export default props => (
    <div>

<header id="header">
      <h1><a href="#dashboard">Dashboard</a></h1>
      <nav className="links">
          <ul>
              <li><a href="#dashboard/users">Usuários</a></li>
              <li><a href="#dashboard/sections">Seções</a></li>
              <li><a href="#dashboard/projects">Projetos</a></li>
              <li><a href="#dashboard/logout">Sair</a></li>
          </ul>
      </nav>
      <nav className="main">
                <ul>
                    <li className="search">
                        <a className="fa-search" href="#search">Search</a>
                        <form id="search" method="get" action="#search">
                            <input type="text" name="q" placeholder="Search" />
                        </form>
                    </li>
                    <li className="menu">
                        <a className="fa-bars" href="#menu">Menu</a>
                    </li>
                </ul>
            </nav>
    </header>
    <section id="menu">

    <section>
                <form className="search" method="get" action="#search">
                    <input type="text" name="q" placeholder="Search" />
                </form>
            </section>

            <section>
            <ul className="links">
                <li><a href="#dashboard/users">Usuários</a></li>
                <li><a href="#dashboard/sections">Seções</a></li>
                <li><a href="#dashboard/projects">Projetos</a></li>
            </ul>
            </section>

            <section>
                <ul className="actions vertical">
                    <li><a href="#" className="button big fit">Log out</a></li>
                </ul>
            </section>

    </section>
    </div>
    
)