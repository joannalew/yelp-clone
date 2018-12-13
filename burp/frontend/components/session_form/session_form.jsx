import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        )
    }

    getUserNames() {
        if (this.props.formType === 'Sign Up'){
            return (
                <div className="login-input-name">
                    <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            placeholder="First Name"
                            className="login-input" />

                    <input type="text"
                        value={this.state.last_name}
                        onChange={this.update('last_name')}
                        placeholder="Last Name"
                        className="login-input" />
                </div>
            )
        }
        return '';
    }

    getUserZip() {
        if (this.props.formType === 'Sign Up') {
            return (
                <input type="text"
                value={this.state.zip_code}
                onChange={this.update('zip_code')}
                placeholder="Zip Code"
                className="login-input" />
            )
        }
        return '';
    } 

    formTitle() {
        if (this.props.formType === 'Sign Up'){
            return (<h2 className="login-form-title">Sign Up for Burp</h2>)
        }
        return (<h2 className="login-form-title">Log In to Burp</h2>)
    }

    formSubtitle() {
        if (this.props.formType === 'Sign Up'){
            return (
                <p className="login-form-subtitle">
                    Connect with great local businesses
                </p>
            )
        }
        return (
            <p className="login-form-subtitle">
                New to Burp? <Link to={'/signup'}>Sign up</Link>
            </p>
        )
    }

    formLegalText() {
        if (this.props.formType === 'Sign Up'){
            return "By continuing, ";
        }
        return "By logging in, ";
    }

    formRedirect() {
        if (this.props.formType === 'Sign Up') {
            return (
                <div className="login-form-redirect">
                    Already have Burp? <Link to={'/login'}>Log in</Link>
                </div>
            )
        }
        return (
            <div className="login-form-redirect">
                New to Burp? <Link to={'/signup'}>Sign up</Link>
            </div>
        )
    }

    render() {
        const newUserForm = this.getUserNames();

        return (
            <div className="login-content">
                <div className="login-header">
                    <div className="header-logo-center">
                        <h1 className="login-logo">
                            <Link to={'/'}>Buurp</Link>
                        </h1>
                    </div>
                </div>

                <div className="login-form-container">
                    {this.renderErrors()}

                    <div className="login-layout">
                        <div className="login-form">
                            <div className="login-form-header">
                                { this.formTitle() }
                                { this.formSubtitle() }
                                <p className="login-legal">
                                    { this.formLegalText() }
                                    you agree to see Burp's food pictures and feel strangely hungry.
                                </p>
                            </div>

                            <form onSubmit={this.handleSubmit} className="login-form-box">
                                <div className="login-form-content">
                                    { newUserForm }
                                    <input type="text"
                                        value={this.state.email}
                                        placeholder="Email"
                                        onChange={this.update('email')}
                                        className="login-input" />

                                    <input type="password"
                                        value={this.state.password}
                                        placeholder="Password"
                                        onChange={this.update('password')}
                                        className="login-input" />

                                    { this.getUserZip() }
                                
                                    <input className="session-submit" type="submit" value={this.props.formType} />
                                </div>
                            </form>

                            { this.formRedirect() }
                        </div>

                        <div className="login-picture">
                            <img src="https://i.imgur.com/TsUXOUG.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;