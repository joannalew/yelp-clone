import React from 'react';
import { Link } from 'react-router-dom';

const HomePageBusinesses = () => {
    return (
        <div className="home-page-businesses-container">
            <div className="home-page-businesses-arrange">
                <div className="home-page-businesses-title">
                    <h2>Yelp San Francisco</h2>
                    <div className="hp-business-location-bar">
                        <ul className="hp-business-locations">
                            <Link to={'/businesses'}><li className="hp-business-location">New York</li></Link>
                            <Link to={'/businesses'}><li className="hp-business-location">San Jose</li></Link>
                            <Link to={'/businesses'}><li className="hp-business-location">Los Angeles</li></Link>
                            <Link to={'/businesses'}><li className="hp-business-location">Chicago</li></Link>
                            <Link to={'/businesses'}><li className="hp-business-location">Palo Alto</li></Link>
                            <Link to={'/businesses'}><li className="hp-business-location">Oakland</li></Link>
                        </ul>
                    </div>
                </div>

                <div className="hp-business-list-container">
                    <h3>Popular Businesses</h3>
                    <div className="hp-business-list-arrange">
                        <div className="hp-business-card">
                            <Link to={'/biz/64'}>
                                <div className="card-photo">
                                    <img src="https://i.imgur.com/KWfOeZG.jpg"></img>
                                </div>
                            </Link>
                            <div className="card-content">
                                <Link to={'/biz/64'}>
                                    <div className="card-content-name">Fog Harbor Fish House</div>
                                </Link>
                                <div className="card-content-category">Seafood, Bars</div>
                                <div className="card-content-category">Fisherman's Wharf</div>
                            </div>
                        </div>
                        <div className="hp-business-card">
                            <Link to={'/biz/65'}>
                                <div className="card-photo">
                                    <img src="https://i.imgur.com/OGdpiCo.jpg"></img>
                                </div>
                            </Link>
                            <div className="card-content">
                                <Link to={'/biz/65'}>
                                    <div className="card-content-name">Marufuku Ramen</div>
                                </Link>
                                <div className="card-content-category">Japanese, Ramen</div>
                                <div className="card-content-category">Japan Center</div>
                            </div>
                        </div>
                        <div className="hp-business-card">
                            <Link to={'/biz/66'}>
                                <div className="card-photo">
                                    <img src="https://i.imgur.com/8RSWlLE.jpg"></img>
                                </div>
                            </Link>
                            <div className="card-content">
                                <Link to={'/biz/66'}>
                                    <div className="card-content-name">The House</div>
                                </Link>
                                <div className="card-content-category">Asian Fusion</div>
                                <div className="card-content-category">North Beach</div>
                            </div>
                        </div>
                    </div>

                    <div className="link-to-businesses">
                        <Link to={'/businesses'}>See more popular businesses</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePageBusinesses;