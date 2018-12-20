import { connect } from 'react-redux';
import BusinessSearch from './business_search';

const mapStateToProps = state => {
    let businesses = Object.values(state.entities.businesses);
    return ({ businesses });
};

export default connect(mapStateToProps, null)(BusinessSearch);