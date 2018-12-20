import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './greeting/home';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessShowContainer from './business_show/business_show_container';
import CreateReviewFormContainer from './review_form/create_review_form_container';
import EditReviewFormContainer from './review_form/edit_review_form_container';
import BusinessSearchContainer from './business/business_search_container';


const App = () => (
    <div>
        <Route exact path="/" component={ Home }/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/businesses" component={BusinessIndexContainer} />
        <Route exact path="/biz/:businessId" component={BusinessShowContainer} />
        <Route exact path="/biz/:businessId/review" component={CreateReviewFormContainer} />
        <Route exact path="/biz/:businessId/edit/:reviewId" component={EditReviewFormContainer} />
        <Route path="/businesses/search" component={BusinessSearchContainer} />
    </div>
);

export default App;