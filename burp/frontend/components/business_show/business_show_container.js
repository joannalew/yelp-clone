import { connect } from 'react-redux';

import { fetchBusiness } from '../../actions/business_actions';
import { selectReviewsForBusiness, selectBusiness, selectCategoriesForBusiness } from '../../reducers/selectors';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
    const businessId = parseInt(ownProps.match.params.businessId);
    const business = selectBusiness(state.entities, businessId);
    const reviews = selectReviewsForBusiness(state.entities, business);
    const categories = selectCategoriesForBusiness(state.entities, business);
    
    return { currentUser: state.entities.users[state.session.id],
             businessId, 
             business, 
             reviews, 
             categories };
};

const mapDispatchToProps = dispatch => ({
    fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);