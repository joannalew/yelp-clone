import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import UserProfileContainer from './greeting/user_profile_container';

const App = () => (
    <div>
        <div>
                <UserProfileContainer />
            </div>
        <header>
            <div className="header-image background-tint">
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

                                    <div className="search-left">
                                        <label htmlFor="find-desc" className="search-label">
                                            <div className="search-left-inner">
                                                <span className="search-desc search-start">Find</span>
                                                <span className="search-input search-find">
                                                    <input type="text" method="get" action="/" placeholder="burgers, barbers, spas, handymen..." />
                                                </span>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="search-right header-search-elements">
                                        <label htmlFor="near-desc">
                                            <div className="search-right-inner">
                                                <span className="search-desc search-mid">Near</span>
                                                <span className="search-input search-near">
                                                    <input type="text" method="get" action="/" defaultValue="San Francisco, CA" />
                                                </span>
                                            </div>
                                        </label>

                                        <div className="search-submit search-end">
                                            <button type="submit" value="Submit"><img src="https://i.imgur.com/WFG3srs.png"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>
            </div>
        </header>

    </div>
);

export default App;