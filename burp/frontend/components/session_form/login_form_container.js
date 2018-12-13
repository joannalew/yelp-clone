import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Log In'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);