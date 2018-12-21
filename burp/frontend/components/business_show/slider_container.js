import { connect } from 'react-redux';
import Slider from './slider';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    console.log(ownProps);
    return {
        business: ownProps.business
    }
};

export default connect(mapStateToProps, null)(Slider);