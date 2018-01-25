import React from 'react';
import Header from './../../common/template/header';
import Post from './../../common/template/post';
import Sidebar from './../../common/template/sidebar';

export default props => (
    <div id='wrapper'>
    <Header />
    <main role="main" id="main">
        <Post />
        </main>
        <Sidebar />
    </div>
);