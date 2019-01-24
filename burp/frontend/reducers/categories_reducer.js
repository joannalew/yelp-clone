import merge from 'lodash/merge';

import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';

const categoriesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return action.categories;
        case RECEIVE_BUSINESS:
            return merge({}, oldState, action.categories);
        default:
            return oldState;
    }
}

export default categoriesReducer;