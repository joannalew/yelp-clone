import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';

const Home = () => (
    <div>
        <header className="main-header">
            <div className="header-image background-tint">
                <div className="header-content">
                    <div className="nav-main">
                        <div className="nav-left">
                            <ul className="nav-content">
                                <Link to={'/businesses'}><li className="header-item">Write a Review</li></Link>
                                <Link to={'/'}><li className="header-item">Events</li></Link>
                                <Link to={'/'}><li className="header-item">Talk</li></Link>
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
                                            <button type="submit" value="Submit"><i className="fas fa-search fa-lg"></i></button>
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

export default Home;