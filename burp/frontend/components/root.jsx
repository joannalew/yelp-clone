import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <div>
                <App/>
            </div>
        </HashRouter>
    </Provider>
);

export default Root;