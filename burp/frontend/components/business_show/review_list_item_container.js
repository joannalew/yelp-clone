import { connect } from 'react-redux';
import ReviewListItem from './review_list_item';
import { deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    author: state.entities.users[ownProps.review.user_id]
});

const mapDispatchToProps = dispatch => ({
    deleteReview: id => dispatch(deleteReview(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListItem);