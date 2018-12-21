import { connect } from 'react-redux';
import Slider from './slider';

const mapStateToProps = (state, ownProps) => ({
    business: ownProps.business
});

export default connect(mapStateToProps, null)(Slider);