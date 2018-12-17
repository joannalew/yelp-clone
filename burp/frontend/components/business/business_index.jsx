import React from 'react';
import { Link } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';
import SearchBar from '../search/search_bar';
import GreetingContainer from '../greeting/greeting_container';
import Greeting from '../greeting/greeting';

class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        let businesses = this.props.businesses.map((business, idx) => {
            return (
                <BusinessIndexItem key={business.id} business={business} idx={idx + 1}/>
            )
        });

        return (
            <div>
                <div className="main-header">
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

                    <div className="business-filter-bar">
                        <div className="business-filter-content">
                            <div className="business-filter-title">
                                <span className="query-title">Best Restaurants</span> in San Francisco, CA
                            </div>
                            <div className="business-filter-count">
                                <p>Showing 1-30 of 4400</p>
                            </div>
                        </div>
                    </div>

                    <div className="business-main-content">
                        <div className="business-main-arrange">
                            <div className="business-main-list">
                                <ul>
                                    { businesses } 
                                </ul>
                            </div>
                        
                            <div className="business-index-map-container">
                                <div className="business-index-map sticky">
                                    <div className="business-map-buttons">
                                        <button className="map-expand-btn"><i class="material-icons">chevron_left</i>Mo' Map</button>
                                        <button className="map-search-btn">Redo Search In Map</button>
                                    </div>
                                    <div className="business-map-google">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>






            </div>
        );
    }
}

export default BusinessIndex;

