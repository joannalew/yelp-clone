import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    navigateToBusinessShow() {
        const url = `/biz/${this.props.match.params.businessId}`;
        this.props.history.push(url); 
    }

    handleSubmit(e) {
        e.preventDefault();
    
        const res = {
            body: this.state.body,
            rating: parseInt(this.state.rating),
            user_id: this.props.currentUser.id,
            business_id: this.props.match.params.businessId
        }
        
        this.props.action(res);
        this.navigateToBusinessShow();
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
                                <GreetingContainer path='review' />
                            </div>
                        </div>
                    </div>

                    <div className="review-form-content">
                        <div className="review-form-title">
                            <Link to={`/biz/${ business.id }`}>{ business.business_name }</Link>
                        </div>

                        <div>
                            <form onSubmit={ this.handleSubmit }>
                                <div className="review-form-container">
                                    <div className="review-form-stars">
                                        <ul className="review-form-stars-list stars-extra-large stars-extra-large-2">
                                            <li className="review-form-stars-container">
                                                <input type="radio" name="stars-input" value="1" onChange={ this.update('rating') } className="review-form-stars-input"/>
                                            </li>
                                            <li className="review-form-stars-container">
                                                <input type="radio" name="stars-input" value="2" onChange={ this.update('rating') } className="review-form-stars-input"/>
                                            </li>
                                            <li className="review-form-stars-container">
                                                <input type="radio" name="stars-input" value="3" onChange={ this.update('rating') } className="review-form-stars-input"/>
                                            </li>
                                            <li className="review-form-stars-container">
                                                <input type="radio" name="stars-input" value="4" onChange={ this.update('rating') } className="review-form-stars-input"/>
                                            </li>
                                            <li className="review-form-stars-container">
                                                <input type="radio" name="stars-input" value="5" onChange={ this.update('rating') } className="review-form-stars-input"/>
                                            </li>
                                        </ul>
                                        <span className="review-form-stars-description">
                                            <p>Select your rating</p>
                                        </span>
                                    </div>

                                    <textarea className="review-form-content" maxLength="5000" placeholder={ placeholder } 
                                              value={ this.state.body } onChange={ this.update('body') }>
                                    </textarea>

                                    <div className="review-form-error-messages">
                                    </div>
                                </div>

                                <div className="review-form-submit">
                                    <button className="review-form-submit-btn" onClick={ this.handleSubmit }>
                                        <span>{ this.props.formType } Review</span>
                                    </button>
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