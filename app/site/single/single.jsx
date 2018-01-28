import React from 'react';
import Header from './../common_template/header';
import Footer from './../common_template/footer';

export default props => (
    <div id='wrapper' className="single">
        <Header />
        <main role="main" id="main">
        <article className="post">
            <header>
                <div className="title">
                    <h2>Magna sed adipiscing</h2>
                    <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum
                        ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
                </div>
                <div className="meta">
                    <time className="published" dateTime="2015-11-01">November 1, 2015</time>
                    <a href="#" className="author"><span className="name">Jane Doe</span><img src="./assets/images/avatar.jpg" alt="" /></a>
                </div>
            </header>
            <figure className="image featured"><img src="./assets/images/pic01.jpg" alt="" /></figure>

            
            <div className="box alt">
                        <div className="row uniform">
                            <div className="12u$"><span className="image fit"><img src="./assets/images/pic02.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="./assets/images/pic04.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="./assets/images/pic05.jpg" alt="" /></span></div>
                            <div className="4u$"><span className="image fit"><img src="./assets/images/pic06.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="./assets/images/pic06.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="./assets/images/pic04.jpg" alt="" /></span></div>
                            <div className="4u$"><span className="image fit"><img src="./assets/images/pic05.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="./assets/images/pic05.jpg" alt="" /></span></div>
                            <div className="4u"><span className="image fit"><img src="./assets/images/pic06.jpg" alt="" /></span></div>
                            <div className="4u$"><span className="image fit"><img src="./assets/images/pic04.jpg" alt="" /></span></div>
                        </div>
                    </div>
     


            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            <p>Nunc quis dui scelerisque, scelerisque urna ut, dapibus orci. Sed vitae condimentum lectus, ut imperdiet quam. Maecenas in justo ut nulla aliquam sodales vel at ligula. Sed blandit diam odio, sed fringilla lectus molestie sit amet. Praesent eu tortor viverra lorem mattis pulvinar feugiat in turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ullamcorper tellus sit amet mattis dignissim. Phasellus ut metus ligula. Curabitur nec leo turpis. Ut gravida purus quis erat pretium, sed pellentesque massa elementum. Fusce vestibulum porta augue, at mattis justo. Integer sed sapien fringilla, dapibus risus id, faucibus ante. Pellentesque mattis nunc sit amet tortor pellentesque, non placerat neque viverra. </p>
            <footer>
                <ul className="stats">
                    <li><a href="#">General</a></li>
                    <li><a href="#" className="icon fa-heart">28</a></li>
                    <li><a href="#" className="icon fa-comment">128</a></li>
                </ul>
            </footer>
        </article>
        </main>
        <Footer />
    </div>
);