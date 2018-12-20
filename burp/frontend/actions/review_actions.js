import * as ReviewApiUtil from '../util/review_api_util'; 

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = ({ review, average_rating, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating,
    author
});

export const removeReview = payload => ({
    type: REMOVE_REVIEW,
    review: payload.review
});

export const createReview = review => dispatch => (
    ReviewApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const updateReview = review => dispatch => (
    ReviewApiUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = id => dispatch => (
    ReviewApiUtil.deleteReview(id)
        .then(payload => dispatch(removeReview(payload)))
);