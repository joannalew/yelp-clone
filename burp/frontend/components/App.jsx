import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './greeting/home';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessShowContainer from './business_show/business_show_container';
import ReviewFormContainer from './review_form/review_form_container';


const App = () => (
    <div>
        <Route exact path="/" component={ Home }/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/businesses" component={BusinessIndexContainer} />
        <Route exact path="/biz/:businessId" component={BusinessShowContainer} />
        <Route path="/biz/:businessId/review" component={ReviewFormContainer} />
    </div>
);

export default App;