import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const businessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            return merge({}, oldState, {[action.business.id]: action.business});
        case RECEIVE_REVIEW:
            const { review, average_rating } = action;
            const newState = merge({}, oldstate);
            newState[review.business_id].reviewIds.push(review.id);
            newState[review.business_id].average_rating = average_rating;
            return newState;
        default:
            return oldState;
    }
};

export default businessesReducer;