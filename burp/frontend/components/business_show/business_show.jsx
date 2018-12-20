import React from 'react';
import { Link } from 'react-router-dom';
import BusinessHeader from '../business/business_header';
import ReviewListItemContainer from './review_list_item_container';

class BusinessShow extends React.Component {
    componentDidMount() {
        this.props.fetchBusiness( this.props.businessId );
    }

    starListClass(index) {
        const element = document.getElementById('starmake');
        const lastClass = element.classList[element.classList.length - 1];
        element.classList.remove(lastClass);
        element.classList.add('stars-extra-large-' + index);
    }

    mouseEnter(index){
        return () => { this.starListClass(index); };
    }

    mouseLeave(){
        return () => { this.starListClass(0); };
    }

    getStarsComponent(bool) {
        if (bool) {
            return (
                <li className="business-show-review">
                    <div className="review-sidebar">
                        <div className="review-item-user-profile">
                            <img className="review-user-pic" src={currentUser.photo}></img>
                            <div className="review-user-info">
                                <p className="review-user-name">{currentUser.first_name} {currentUser.last_name[0]}.</p>
                                <p className="review-user-zip">{currentUser.zip_code}</p>
                            </div>
                        </div>
                    </div>

                    <div className="review-item-body">
                        <div className="create-review-stars-container">
                            <div className="space-after-line">
                                <div className="create-review-stars">
                                    <ul id="starmake" className={`review-form-stars-list stars-extra-large stars-extra-large-0`}>
                                        <li className="review-form-stars-container" onMouseEnter={ this.mouseEnter(1) } onMouseLeave={ this.mouseLeave() }>
                                            <input type="radio" name="stars-input" value="1" className="review-form-stars-input"/>
                                        </li>
                                        <li className="review-form-stars-container" onMouseEnter={ this.mouseEnter(2) } onMouseLeave={ this.mouseLeave() }>
                                            <input type="radio" name="stars-input" value="2" className="review-form-stars-input"/>
                                        </li>
                                        <li className="review-form-stars-container" onMouseEnter={ this.mouseEnter(3) } onMouseLeave={ this.mouseLeave() }>
                                            <input type="radio" name="stars-input" value="3" className="review-form-stars-input"/>
                                        </li>
                                        <li className="review-form-stars-container" onMouseEnter={ this.mouseEnter(4) } onMouseLeave={ this.mouseLeave() }>
                                            <input type="radio" name="stars-input" value="4" className="review-form-stars-input"/>
                                        </li>
                                        <li className="review-form-stars-container" onMouseEnter={ this.mouseEnter(5) } onMouseLeave={ this.mouseLeave() }>
                                            <input type="radio" name="stars-input" value="5" className="review-form-stars-input"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <span className="create-review-link">
                                <Link to={`/biz/${this.props.business.id}/review`}>Start your review of <span className="bold">{ this.props.business.business_name }.</span></Link>
                            </span>
                        </div>
                    </div>
                </li>
            )
        }
        else{
            return (<div></div>)
        }
    }

    render() {
        const starClass = Math.floor(this.props.business.average_rating * 2);
        const reviews = this.props.reviews.map(review => {
            return (
                <ReviewListItemContainer key={review.id} review={review} business={this.props.business}/>
            )
        });

        let buttonTitle = "Write a Review";
        let buttonLink = `/biz/${this.props.businessId}/review`;
        let starsComponent = true;
        if (!this.props.currentUser) { starsComponent = false; }

        for(let i = 0; i < this.props.reviews.length; i++){
            if (this.props.currentUser && this.props.reviews[i].user_id === this.props.currentUser.id) { 
                buttonTitle = "Edit My Review"; 
                buttonLink = `/biz/${this.props.businessId}/edit/${this.props.reviews[i].id}`;
                starsComponent = false;
            };
        }

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
                            <Link to={ buttonLink }>
                                <button className='business-show-add-review'>
                                    <i className="material-icons">star_rate</i>
                                    <span>{ buttonTitle }</span>
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
                                    { this.getStarsComponent(starsComponent) }
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