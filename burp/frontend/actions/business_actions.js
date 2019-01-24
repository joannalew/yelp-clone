import * as BusinessApiUtil from '../util/business_api_util';
import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

export const receiveBusinesses = ({ businesses, reviews, authors, categories }) => ({
    type: RECEIVE_BUSINESSES,
    businesses, 
    reviews,
    authors,
    categories
});

export const receiveBusiness = ({ business, reviews, authors, categories }) => ({
    type: RECEIVE_BUSINESS,
    business,
    reviews,
    authors,
    categories
});

export const fetchBusinesses = () => dispatch => (
    BusinessApiUtil.fetchBusinesses()
        .then(payload => dispatch(receiveBusinesses(payload)))
);

export const fetchBusiness = id => dispatch => (
    BusinessApiUtil.fetchBusiness(id)
        .then(payload => dispatch(receiveBusiness(payload)))
);

export const createBusiness = business => dispatch => (
    BusinessApiUtil.fetchBusiness(business)
        .then(business => dispatch(receiveBusiness(business)))
);

export const searchBusinesses = query => dispatch => (
    SearchApiUtil.searchBusinesses(query)
        .then(payload => dispatch(receiveBusinesses(payload)))
);