import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className='login-signup'>
            <Link to='/login'>Log in</Link><br/>
            <Link to='/signup'>Sign up!</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div className='welcome-user'>
            <h2 className='welcome-name'>Hi, {currentUser.first_name}!</h2>
            <button className="welcome-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;