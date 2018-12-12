import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <header>
            <div className="header-image">
                <div className="nav-main">
                    <div className="nav-left">
                        <ul className="nav-content">
                            <li className="header-item"><Link to={'/'}>Write a Review</Link></li>
                            <li className="header-item"><Link to={'/'}>Events</Link></li>
                            <li className="header-item"><Link to={'/'}>Talk</Link></li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <GreetingContainer />
                    </div>
                </div>
            </div>
        </header>

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;