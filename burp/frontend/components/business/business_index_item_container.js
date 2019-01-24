import { connect } from 'react-redux';
import { selectReviewsForBusiness, selectBusiness, selectCategoriesForBusiness } from '../../reducers/selectors';
import BusinessIndexItem from './business_index_item';

const mapStateToProps = (state, ownProps) => {
    const businessId = parseInt(ownProps.business.id);
    const business = selectBusiness(state.entities, businessId);
    const reviews = selectReviewsForBusiness(state.entities, business);
    const categories = selectCategoriesForBusiness(state.entities, business);
    return { business, reviews, categories, idx: ownProps.idx };
};

export default connect(mapStateToProps, null)(BusinessIndexItem);