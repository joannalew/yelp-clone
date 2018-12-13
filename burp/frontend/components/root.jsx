import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import App from './App';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';


const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" component={ App }/>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </div>
        </HashRouter>
    </Provider>
);

export default Root;