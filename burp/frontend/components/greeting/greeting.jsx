import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileContainer from './user_profile_container';

const Greeting = ({ currentUser, demoLogin, path }) => {
    const sessionLinks = () => (
        <ul className="nav-content">
            <li className="header-item"><Link to='/login'>Log In</Link></li>
            <li className="header-item"><Link to='/signup'>Sign Up</Link></li>
            <button className="header-item signup-btn" onClick={demoLogin}>Demo Log In</button>
        </ul>
    );

    const personalGreeting = () => (
        <ul className='welcome-user nav-content'>
            <li className="header-icon"><Link to='/'><i className="material-icons">chat_bubble</i></Link></li>
            <li className="header-icon"><Link to='/'><i className="material-icons">notifications</i></Link></li>
            <UserProfileContainer />
        </ul>
    );

    const sessionButtons = () => (
        <div className="session-btns">
            <Link to='/login'><span className="session-login-btn">Log In</span></Link>
            <Link to='/signup'><span className="session-signup-btn">Sign Up</span></Link>
        </div>
    );

    if (currentUser) 
        return personalGreeting();
    else if (path === 'business')
        return sessionButtons();
    else
        return sessionLinks();
};

export default Greeting;