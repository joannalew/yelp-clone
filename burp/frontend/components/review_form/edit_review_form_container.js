import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return{
    businesses: state.entities.businesses,
    currentUser: state.entities.users[state.session.id],
    review: state.entities.reviews[ownProps.match.params.reviewId],
    formType: 'Edit Your',
    match: {params: {businessId: ownProps.match.params.businessId} }
}};

const mapDispatchToProps = dispatch => ({
    action: review => dispatch(updateReview(review)),
    fetchBusiness: id => dispatch(fetchBusiness(id))
});

class EditPostForm extends React.Component {
    render() {
        const { businesses, currentUser, review, formType, action, fetchBusiness, match } = this.props;
        return ( <ReviewForm businesses={ businesses } currentUser={ currentUser } review={ review } formType={ formType } action={ action } fetchBusiness={ fetchBusiness } match={ match }/>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);

