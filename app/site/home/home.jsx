import React from 'react';
import Header from './../../common/template/header';
import Projects from './projects';
import Sidebar from './../../common/template/sidebar';

export default props => (
    <div id='wrapper'>
        <Header />
        <main role="main" id="main">
            <Projects />
        </main>
        <Sidebar />
    </div>
);