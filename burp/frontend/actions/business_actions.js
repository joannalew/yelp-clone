import * as BusinessApiUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

export const receiveBusinesses = ({ businesses, reviews }) => ({
    type: RECEIVE_BUSINESSES,
    businesses, 
    reviews
});

export const receiveBusiness = ({ business, reviews, authors }) => ({
    type: RECEIVE_BUSINESS,
    business,
    reviews,
    authors
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