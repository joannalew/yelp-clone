import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';
import GreetingContainer from '../greeting/greeting_container';


const BusinessHeader = () => (
    <div>
        <div className="business-main-header">
            <div className="business-header-arrange">
                <div className="business-header-logo">
                    <Link to={'/'}>Beerp</Link>
                </div>

                <div className="business-header-search">
                    <SearchBar placeholder="tacos, cheap dinner, Max's" />
                </div>

                <div className="greeting-buttons">
                    <GreetingContainer path='business' />
                </div>
            </div>
        </div>


        <div className="business-subheader">
            <div className="subheader-arrange">
                <div className="subheader-categories">
                
                    <Link to={'/businesses'}>
                        <div className="business-subheader-item">
                            <span className="subheader-icon"><i className="material-icons">local_cafe</i></span>
                            <span className="subheader-text">Breakfast</span>
                            <span className="subheader-icon"><i className="material-icons">expand_more</i></span>
                        </div>
                    </Link>

                    <Link to={'/businesses'}>
                        <div className="business-subheader-item">
                            <span className="subheader-icon"><i className="material-icons">fastfood</i></span>
                            <span className="subheader-text">Lunch</span>
                            <span className="subheader-icon"><i className="material-icons">expand_more</i></span>
                        </div>
                    </Link>

                    <Link to={'/businesses'}>
                        <div className="business-subheader-item business-subheader-item-last">
                            <span className="subheader-icon"><i className="material-icons">restaurant</i></span>
                            <span className="subheader-text">Dinner</span>
                            <span className="subheader-icon"><i className="material-icons">expand_more</i></span>
                        </div>
                    </Link>
                </div>

                <div className="subheader-write-review">
                    <Link to={'/businesses'}>
                        <div className="business-subheader-item business-subheader-item-last">
                            <span className="subheader-icon"><i className="material-icons">create</i></span>
                            <span className="subheader-text">Write a Review</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);


export default BusinessHeader;