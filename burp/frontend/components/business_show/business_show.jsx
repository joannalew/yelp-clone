import React from 'react';
import { Link } from 'react-router-dom';
import BusinessHeader from '../business/business_header';
import ReviewListItemContainer from './review_list_item_container';

class BusinessShow extends React.Component {
    componentDidMount() {
        this.props.fetchBusiness( this.props.businessId );
    }

    render() {
        const reviews = this.props.reviews.map(review => {
            return (
                <ReviewListItemContainer key={review.id} review={review} business={this.props.business}/>
            )
        });

        const starClass = Math.floor(this.props.business.average_rating * 2);

        return (
            <div className="business-show-page">
                <div className="main-header">
                    <BusinessHeader />

                    <div className="business-show-header">
                        <div className="business-show-details">
                            <p className="business-show-title">{ this.props.business.business_name }</p>
                            <p className="business-show-stars">
                                <img className={`stars-large-${starClass}` + ' stars-large'} src="https://i.imgur.com/UkZkm0D.png"></img>
                                <span className="business-show-review-count">{ this.props.reviews.length } reviews</span>
                            </p>
                            <p className="business-show-pricecat">
                                <span className="business-item-price">{ this.props.business.price }</span>
                                <Link to={'/businesses'}>Category 1</Link>, &nbsp;
                                <Link to={'/businesses'}>Category 2</Link>
                            </p>
                        </div>
                        
                        <div className="business-show-header-buttons">
                            <Link to={`/biz/${this.props.businessId}/review`}>
                                <button className='business-show-add-review'>
                                    <i className="material-icons">star_rate</i>
                                    <span>Write a Review</span>
                                </button>
                            </Link>
                            <span className="business-show-small-btns">
                                <button className='business-btn-begin'>
                                    <i className="material-icons">add_a_photo</i>
                                    <span>Add Photo</span>
                                </button>
                                <button className='business-btn-mid'>
                                    <i className="material-icons">share</i>
                                    <span>Share</span>
                                </button>
                                <button className='business-btn-end'>
                                    <i className="material-icons">bookmark</i>
                                    <span>Save</span>
                                </button>
                            </span>
                        </div>
                    </div>
                    
                    <div className="business-show-subheader">
                        <div className="business-show-mapbox">
                            <div className="business-mapbox-map">
                            </div>
                            <div className="business-mapbox-text">
                            </div>
                        </div>

                        <div className="business-show-showcase">
                            <div className="business-show-border"></div>
                            <div className="business-pics-showcase">
                            </div>
                        </div>
                    </div>
                
                    <div className="business-show-main">
                        <div className="business-show-main-content">
                            <div className="business-review-section-header">
                                <h2 className="business-review-title">Recommended Reviews </h2>
                                <span>for { this.props.business.business_name }</span>
                            </div>

                            <div className="business-review-list-container">
                                <ul className="business-review-list">
                                    { reviews }
                                </ul>
                            </div>
                        </div>

                        <div className="business-show-main-sidebar">
                        sdfsd
                        </div>
                    </div>
                
                </div>
            </div>

        );
    }

};

export default BusinessShow;