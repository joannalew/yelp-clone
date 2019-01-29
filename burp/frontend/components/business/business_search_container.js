import { connect } from 'react-redux';
import BusinessSearch from './business_search';
import { searchCategories } from '../../actions/business_actions';

const mapStateToProps = state => {
    let businesses = Object.values(state.entities.businesses);
    return ({ businesses });
};

const mapDispatchToProps = dispatch => ({
    searchCategories: query => dispatch(searchCategories(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessSearch);