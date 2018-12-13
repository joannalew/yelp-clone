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
            <li className="header-icon"><Link to='/'><img src="https://i.imgur.com/A24Ca1L.png"></img></Link></li>
            <li className="header-icon"><Link to='/'><img src="https://i.imgur.com/yK2E9my.png"></img></Link></li>
            <button className="welcome-button signup-btn" onClick={logout}>Log Out</button>
        </ul>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;