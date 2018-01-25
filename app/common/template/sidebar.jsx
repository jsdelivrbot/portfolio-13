import React from 'react'

export default props => (
    <section id="sidebar">
        <section id="intro">
            <a href="#" className="logo"><img src="images/logo.jpg" alt="" /></a>
            <header>
                <h2>Future Imperfect</h2>
                <p>Another fine responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
            </header>
        </section>

        <section>
            <article className="mini-post">
                <header>
                    <h3><a href="#">Vitae sed condimentum</a></h3>
                    <time className="published" >October 20, 2015</time>
                    <a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>
                </header>
                <a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
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
                        <a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
                    </article>
                </li>
            </ul>
        </section>

        <section className="blurb">
            <h2>About</h2>
            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
            <ul className="actions">
                <li><a href="#" className="button">Learn More</a></li>
            </ul>
        </section>

        <section id="footer">
            <ul className="icons">
                <li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="fa-rss"><span className="label">RSS</span></a></li>
                <li><a href="#" className="fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <p className="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. Images: <a href="http://unsplash.com">Unsplash</a>.</p>
        </section>

    </section>
)