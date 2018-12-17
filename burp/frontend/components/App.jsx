import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './greeting/home';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessShowContainer from './business_show/business_show_container';


const App = () => (
    <div>
        <Route exact path="/" component={ Home }/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/businesses" component={BusinessIndexContainer} />
        <Route path="/biz/:businessId" component={BusinessShowContainer} />
    </div>
);

export default App;