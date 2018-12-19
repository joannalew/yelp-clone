import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileContainer from '../greeting/user_profile_container';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: '', rating: 0 }
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    render() {
        const placeholder = "Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.";
        const business = this.props.businesses[this.props.match.params.businessId];
        if (business === undefined) { return <div></div> };

        return (
            <div className="review-form-page">
                <div className="main-header">
                    <div className="main-header-review-form">
                        <div className="review-form-header">
                            <div className="review-form-header-left">
                                <Link to={'/'}><div className="business-header-logo"></div></Link>
                                <span className="review-form-header-title">Write a Review</span>
                            </div>
                            <div className="review-form-header-right">
                                <UserProfileContainer />
                            </div>
                        </div>
                    </div>

                    <div className="review-form-content">
                        <div className="review-form-title">
                            <Link to={`/biz/${ business.id }`}>{ business.business_name }</Link>
                        </div>

                        <div>
                            <form action="">
                                <div className="review-form-container">
                                    <div className="review-form-stars">
                                        <ul className="review-form-stars-list">
                                            <li className="review-form-stars-container">
                                                <input className="review-form-stars-input" type="radio"/>
                                            </li>
                                            <li className="review-form-stars-container">
                                                <input className="review-form-stars-input" type="radio"/>
                                            </li>
                                            <li className="review-form-stars-container">
                                                <input className="review-form-stars-input" type="radio"/>
                                            </li>
                                            <li className="review-form-stars-container">
                                                <input className="review-form-stars-input" type="radio"/>
                                            </li>
                                            <li className="review-form-stars-container">
                                                <input className="review-form-stars-input" type="radio"/>
                                            </li>
                                        </ul>
                                    </div>

                                    <textarea className="review-form-content" maxLength="5000" placeholder={ placeholder }></textarea>

                                    <div className="review-form-error-messages">
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewForm;