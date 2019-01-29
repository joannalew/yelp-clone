import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';
import GreetingContainer from '../greeting/greeting_container';


const BusinessHeader = props => {
    const handleSubmit = (e) => {
        console.log(e.currentTarget.value);
        e.preventDefault();
        props.searchCategories({ category: e.currentTarget.value })
            .then(() => props.history.push('/businesses/search'));
    };

    return (
        <div>
            <div className="business-main-header">
                <div className="business-header-arrange">
                    <div className="business-header-logo">
                        <Link to={'/'}>Beerp</Link>
                    </div>

                    <div className="business-header-search">
                        <SearchBarContainer placeholder="tacos, cheap dinner, Max's" />
                    </div>

                    <div className="greeting-buttons">
                        <GreetingContainer path='business' />
                    </div>
                </div>
            </div>


            <div className="business-subheader">
                <div className="subheader-arrange">
                    <div className="subheader-categories">

                        <button className="button-link-header" type="submit" value={"Breakfast"} onClick={ handleSubmit }>
                            <div className="business-subheader-item">
                                <span className="subheader-icon"><i className="material-icons">local_cafe</i></span>
                                <span className="subheader-text">Breakfast</span>                            </div>
                        </button>

                        <button className="button-link-header" type="submit" value={"Lunch"} onClick={ handleSubmit }>
                            <div className="business-subheader-item">
                                <span className="subheader-icon"><i className="material-icons">fastfood</i></span>
                                <span className="subheader-text">Lunch</span>                            </div>
                        </button>

                        <button className="button-link-header" type="submit" value={"Dinner"} onClick={ handleSubmit }>
                            <div className="business-subheader-item business-subheader-item-last">
                                <span className="subheader-icon"><i className="material-icons">restaurant</i></span>
                                <span className="subheader-text">Dinner</span>                            </div>
                        </button>
                    </div>

                    <div className="subheader-write-review">
                        <Link to={'/businesses'}>
                            <div className="business-subheader-item business-subheader-item-last">
                                <span className="subheader-icon"><i className="material-icons">business</i></span>
                                <span className="subheader-text">All Businesses</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default BusinessHeader;