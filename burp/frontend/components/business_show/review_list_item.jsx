import React from 'react';

const ReviewListItem = ({ review, author }) => {
    const { rating, body } = review;
    return (
        <li className="business-show-review">
            <div className="review-item-user-profile">
                <img className="review-user-pic" src={author.photo}></img>
                <div className="review-user-info">
                    <p className="review-user-name">{author.first_name} {author.last_name[0]}.</p>
                    <p className="review-user-zip">{author.zip_code}</p>
                </div>
            </div>

            <div className="review-item-body">
                <div className="review-item-stars">
                    <img className={`stars-medium-${ rating }`} src="https://i.imgur.com/UkZkm0D.png"></img>
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