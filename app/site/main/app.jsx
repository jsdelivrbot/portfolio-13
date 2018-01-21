import './../../common/template/dependencies';
import React from 'react';
import Header from './../../common/template/header';
import Footer from './../../common/template/footer';

export default props => (
    <div className='wrapper'>
        <Header />
        <main role="main">
            <Footer />
        </main>
    </div>
);