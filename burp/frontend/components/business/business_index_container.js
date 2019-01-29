import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses, searchCategories } from '../../actions/business_actions';

const mapStateToProps = state => {
    let businesses = Object.values(state.entities.businesses);
    return ({ businesses });
};

const mapDispatchToProps = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    searchCategories: query => dispatch(searchCategories(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);