import React from 'react';

import Footer from './footer';

export default props => (
    <section id="sidebar">
        <section id="intro">
            <a href="#" className="logo"><img src="./assets/images/logo.jpg" alt="Future Imperfect" /></a>
            <header>
                <h2>Future Imperfect</h2>
                <p>Another fine responsive site template by <a href="http://html5up.net" target="_blank">HTML5 UP</a></p>
            </header>
        </section>

        <section>
            <article className="mini-post">
                <header>
                    <h3><a href="#">Vitae sed condimentum</a></h3>
                    <time className="published" >October 20, 2015</time>
                    <a href="#" className="author"><img src="./assets/images/avatar.jpg" alt="" /></a>
                </header>
                <a href="#" className="image"><img src="./assets/images/pic04.jpg" alt="" /></a>
            </article>
        </section>
        
        <section>
            <ul className="posts">
                <li>
                    <article>
                        <header>
                            <h3><a href="#">Lorem ipsum fermentum ut nisl vitae</a></h3>
                            <time className="published" >October 20, 2015</time>
                        </header>
                        <a href="#" className="image"><img src="./assets/images/pic08.jpg" alt="" /></a>
                    </article>
                </li>
            </ul>
        </section>

        <section className="blurb">
            <h2>About</h2>
            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
            <ul className="actions">
                <li><a href="/#about" className="button">Saiba mais</a></li>
            </ul>
        </section>
        <Footer />
    </section>
)