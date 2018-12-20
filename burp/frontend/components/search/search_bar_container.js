import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
    return { placeholder: ownProps.placeholder }
};

const mapDispatchToProps = dispatch => ({
    searchBusinesses: query => dispatch(searchBusinesses(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

