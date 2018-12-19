import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import ReviewForm from './review_form';

const mapStateToProps = state => ({  
    businesses: state.entities.businesses
});

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);