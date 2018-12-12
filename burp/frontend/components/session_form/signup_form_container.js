import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to='/login'>Log in instead</Link>
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);