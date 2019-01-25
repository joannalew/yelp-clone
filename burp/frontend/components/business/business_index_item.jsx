import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchCategories({ category: e.currentTarget.value })
            .then(() => this.props.history.push('/businesses/search'));
    }

    render() {
        let business = this.props.business;
        let reviews = this.props.reviews;
        let categories = this.props.categories;
        let idx = this.props.idx;

        let category1 = "";
        let category2 = "";
        if (categories.length > 0) {
            category1 = categories[0].name;
            category2 = categories[1].name;
        }

        let review = "";
        if (reviews.length > 0) { review = '"' + reviews[0].body + '"';}
        const starRating = Math.floor(business.average_rating * 2);

        return(
        <li className="business-index-item">
            <div className="business-item-content-main">
                <div className="business-item-content-arrange">
                    <Link to={`/biz/${business.id}`}>
                        <img className="business-image" src={ business.photo }></img>
                    </Link>
                    <div>
                        <div className="business-item-info">
                            <div className="business-item-info-left">
                                <p className="business-item-title">{ idx }. &nbsp; <Link to={`/biz/${ business.id }`}>{ business.business_name }</Link></p>
                                <p className="business-item-stars">
                                    <img className={`stars-medium-${starRating}` + ' stars-medium'} src="https://i.imgur.com/UkZkm0D.png"></img>
                                    <span>{ reviews.length } reviews </span>
                                </p>
                                <p className="business-item-categories">
                                    <span className="business-item-price">{ business.price }</span> 
                                    <button className="button-link" type="submit" value={ category1 } onClick={ this.handleSubmit }>{ category1 }</button>,&nbsp;
                                    <button className="button-link" type="submit" value={ category2 } onClick={ this.handleSubmit }>{ category2 }</button>
                                </p>
                            </div>

                            <div className="business-item-info-right">
                                <p>{ business.phone }</p>
                                <p>{ business.address }</p>
                                <p>{ business.city }</p>
                            </div>
                        </div>
                    
                        <div className="business-item-review-preview">
                            <p>{ review }</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )}
}
        

export default BusinessIndexItem;