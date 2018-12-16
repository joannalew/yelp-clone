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
        if (this.props.errors.length > 0){
            return (
                <div className="login-errors-container">
                    <div className="login-errors-center">
                        <ul className="login-errors-list">
                            {this.props.errors.map((error, i) => (
                                <li className="login-error-message" key={`error-${i}`}>{error}</li>
                            ))}
                        </ul>
                        <button onClick={() => this.props.clearErrors()}>
                            <i className="material-icons error-close-btn">close</i>
                        </button>
                    </div>
                </div>
            )
        }
        return "";
    }

    getUserNames() {
        if (this.props.formType === 'Sign Up'){
            return (
                <div className="login-input-name">
                    <input type="text" required 
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            placeholder="First Name"
                            className="login-input" />

                    <input type="text" required
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
                className={"login-input " + this.errorZip() } />
            )
        }
        return '';
    } 

    formTitle() {
        if (this.props.formType === 'Sign Up'){
            return (<h2 className="login-form-title">Sign Up for Berp</h2>)
        }
        return (<h2 className="login-form-title">Log In to Berp</h2>)
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
                New to Berp? <Link to={'/signup'}>Sign up</Link>
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
                    Already have Berp? <Link to={'/login'}>Log in</Link>
                </div>
            )
        }
        return (
            <div className="login-form-redirect">
                New to Berp? <Link to={'/signup'}>Sign up</Link>
            </div>
        )
    }

    errorEmail() {
        if (this.props.errors.includes("The email address or password you entered is incorrect.") ||
            this.props.errors.includes("Email has already been taken")){
                return "login-error-glow";
            }
        return "";
    }

    errorPassword() {
        if (this.props.errors.includes("Password is too short (minimum is 6 characters)") ||
            this.props.errors.includes("The email address or password you entered is incorrect.")){
                return "login-error-glow";
            }
        return "";
    }

    errorZip() {
        if (this.props.errors.includes("Zip code can't be blank")){
            return "login-error-glow";
        }
        return "";
    }

    componentWillUnmount() {
        this.props.clearErrors()
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
                                    you agree to see Berp's food pictures and feel strangely hungry.
                                </p>
                            </div>

                            <form onSubmit={this.handleSubmit} className="login-form-box">
                                <div className="login-form-content">
                                    { newUserForm }
                                    <input type="email" required
                                        value={this.state.email}
                                        placeholder="Email"
                                        onChange={this.update('email')}
                                        className={"login-input " + this.errorEmail() } />

                                    <input type="password" required
                                        value={this.state.password}
                                        placeholder="Password"
                                        onChange={this.update('password')}
                                        className={"login-input " + this.errorPassword() } />

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