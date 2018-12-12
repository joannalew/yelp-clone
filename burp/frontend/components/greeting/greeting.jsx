import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <ul className="nav-content">
            <li className="header-item"><Link to='/login'>Log In</Link></li>
            <li className="header-item signup-btn"><Link to='/signup'>Sign Up</Link></li>
        </ul>
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