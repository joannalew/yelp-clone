import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SearchBarContainer from '../search/search_bar_container';

const Home = () => {
    const headerRand = Math.floor(Math.random() * 7);

    return (
        <div>
            <header className="main-header">
                <div className={`header-image header-image-${headerRand} background-tint`}>
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
                                <GreetingContainer path='home' />
                            </div>
                        </div>

                        <div className="header-main">
                            <div className="header-logo-center">
                                <h1 className="header-logo">
                                    <Link to={'/'}>Buurp</Link>
                                </h1>
                            </div>

                            <SearchBarContainer placeholder="burgers, barbers, spas, handymen..."/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Home;