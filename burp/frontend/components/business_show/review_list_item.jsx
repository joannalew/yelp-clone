import React from 'react';
import { Link } from 'react-router-dom';

const ReviewListItem = ({ review, author }) => {
    const { rating, body } = review;
    return (
        <li className="business-show-review">
            <div className="review-sidebar">
                <div className="review-item-user-profile">
                    <img className="review-user-pic" src={author.photo}></img>
                    <div className="review-user-info">
                        <p className="review-user-name">{author.first_name} {author.last_name[0]}.</p>
                        <p className="review-user-zip">{author.zip_code}</p>
                    </div>
                </div>
                <div className="review-sidebar-links">
                    <Link to={'/'}><div className="review-link"><i class="material-icons">share</i><span>Share review</span></div></Link>
                    <Link to={'/'}><div className="review-link"><i class="material-icons">code</i><span>Embed review</span></div></Link>
                    <Link to={'/'}><div className="review-link"><i class="material-icons">create</i><span>Edit review</span></div></Link>
                </div>
            </div>

            <div className="review-item-body">
                <div className="review-item-stars">
                    <img className={`stars-medium-${ rating * 2 }` + ' stars-medium'} src="https://i.imgur.com/UkZkm0D.png"></img>
                    <span className="review-item-date"> 
                        { review.updated_at.substring(5, 7) + '/' +
                         review.updated_at.substring(8, 10) + '/' +
                         review.updated_at.substring(0, 4) } 
                    </span>
                </div>
                <p className="review-body">{ body }</p>
            </div>
        </li>
    )
};

export default ReviewListItem;