import React from 'react';
import { Link } from 'react-router-dom';

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
            <button className="user-prof-btn" onClick={logout}>
                <div className="user-prof-align">
                    <img src="https://i.imgur.com/V6leSWg.png"></img>
                    <i className="fas fa-caret-down"></i>
                </div>
            </button>
        </ul>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;