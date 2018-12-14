import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileContainer from './user_profile_container';

const Greeting = ({ currentUser, logout, demoLogin }) => {
    const sessionLinks = () => (
        <ul className="nav-content">
            <li className="header-item"><Link to='/login'>Log In</Link></li>
            <li className="header-item"><Link to='/signup'>Sign Up</Link></li>
            <button className="header-item signup-btn" onClick={demoLogin}>Demo Log In</button>
        </ul>
    );

    const personalGreeting = () => (
        <ul className='welcome-user nav-content'>
            <li className="header-icon"><Link to='/'><i className="fas fa-comment-alt fa-lg"></i></Link></li>
            <li className="header-icon"><Link to='/'><i className="fas fa-bell fa-lg"></i></Link></li>
            <UserProfileContainer />
        </ul>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;