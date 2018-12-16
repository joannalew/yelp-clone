import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({session, entities: { users }}, { path }) => ({
    currentUser: users[session.id],
    path: path
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    demoLogin: () => dispatch(login({email: 'noemail@email.com', password: 'password'}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);