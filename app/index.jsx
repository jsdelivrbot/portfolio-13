import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import Routes from './routes/routes';
import reducers from './reducers/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools);

ReactDOM.render(
    <Provider store={store}>
        <Routes locales={['pt-BR']} />
    </Provider>
, document.getElementById('app'));