import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({session, entities: { users }}) => {
    console.log(users);
    return{
    currentUser: users[session.id]
}};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    demoLogin: () => dispatch(login({email: 'noemail@email.com', password: 'password'}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);