import { connect } from 'react-redux';
import { selectReviewsForBusiness, selectBusiness } from '../../reducers/selectors';
import BusinessIndexItem from './business_index_item';

const mapStateToProps = (state, ownProps) => {
    const businessId = parseInt(ownProps.business.id);
    const business = selectBusiness(state.entities, businessId);
    const reviews = selectReviewsForBusiness(state.entities, business);
    return { business, reviews, idx: ownProps.idx };
};

export default connect(mapStateToProps, null)(BusinessIndexItem);