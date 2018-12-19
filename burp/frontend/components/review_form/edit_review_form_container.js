import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => ({
    businesses: state.entities.businesses,
    currentUser: state.entities.users[state.session.id],
    review: state.reviews[ownProps.match.params.reviewId],
    formType: 'Update'
});

const mapDispatchToProps = dispatch => ({
    action: review => dispatch(updateReview(review)),
    fetchBusiness: id => dispatch(fetchBusiness(id))
});

class EditPostForm extends React.Component {
    render() {
        const { businesses, currentUser, review, formType, action, fetchBusiness } = this.props;
        return ( <ReviewForm businesses={ businesses } currentUser={ currentUser } review={ review } formType={ formType } action={ action } fetchBusiness={ fetchBusiness } />);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);

