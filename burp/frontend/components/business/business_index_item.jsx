import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = props => (
    <li className="business-index-item">
        <div className="business-item-content-main">
            <div className="business-item-content-arrange">
                <Link to="/businesses">
                    <img className="business-image" src={props.business.photo}></img>
                </Link>
                <div className="business-item-info">
                    <div className="business-item-info-left">
                        <p className="business-item-title">{props.idx}. &nbsp; <Link to={`/biz/${props.business.id}`}>{props.business.business_name}</Link></p>
                        <p className="business-item-stars">
                            <img className="stars-medium-4" src="https://i.imgur.com/UkZkm0D.png"></img>
                            400 reviews
                        </p>
                        <p className="business-item-categories">
                            <span className="business-item-price">$$</span> 
                            <Link to={'/businesses'}>Category 1</Link>, &nbsp;
                            <Link to={'/businesses'}>Category 2</Link>
                        </p>
                    </div>

                    <div className="business-item-info-right">
                        <p>{props.business.phone}</p>
                        <p>{props.business.address}</p>
                        <p>{props.business.city}</p>
                    </div>
                </div>
            </div>
        </div>
    </li>
);

export default BusinessIndexItem;