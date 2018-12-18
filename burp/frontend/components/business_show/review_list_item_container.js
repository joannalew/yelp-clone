import { connect } from 'react-redux';
import ReviewListItem from './review_list_item';

const mapStateToProps = (state, ownProps) => {
    return {
        author: state.entities.users[ownProps.review.user_id]
}};

export default connect(mapStateToProps, null)(ReviewListItem);