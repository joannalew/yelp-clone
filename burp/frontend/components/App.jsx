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
                <div className="header-content">
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

                    <div className="header-main">
                        <div className="header-logo-center">
                            <h1 className="header-logo">
                                <Link to={'/'}>Buurp</Link>
                            </h1>
                        </div>

                        <div className="header-search">
                            <form action="get" action="/" className="header-search-form">
                                <div className="header-search-elements">
                                    <label htmlFor="find-desc" className="search-label">
                                        <div className="search-left">
                                            <span className="search-desc search-end">Find</span>
                                            <span className="search-input search-find">
                                                <input type="text" method="get" action="/" placeholder="burgers, barbers, spas, handymen..." />
                                            </span>
                                        </div>
                                    </label>
                                    <label htmlFor="near-desc">
                                        <div className="search-right">
                                            <span className="search-desc search-mid">Near</span>
                                            <span className="search-input search-near">
                                                <input type="text" method="get" action="/" defaultValue="San Francisco, CA" />
                                            </span>
                                        </div>
                                    </label>
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>
            </div>
        </header>

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;