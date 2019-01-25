import { connect } from 'react-redux';
import { selectReviewsForBusiness, selectBusiness, selectCategoriesForBusiness } from '../../reducers/selectors';
import BusinessIndexItem from './business_index_item';
import { searchCategories } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
    const businessId = parseInt(ownProps.business.id);
    const business = selectBusiness(state.entities, businessId);
    const reviews = selectReviewsForBusiness(state.entities, business);
    const categories = selectCategoriesForBusiness(state.entities, business);
    return { business, reviews, categories, idx: ownProps.idx, history: ownProps.history };
};

const mapDispatchToProps = dispatch => ({
    searchCategories: query => dispatch(searchCategories(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndexItem);