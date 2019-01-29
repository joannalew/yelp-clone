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
            <a href="https://www.linkedin.com/in/joannalew/"><li className="header-icon"><i className="material-icons">chat_bubble</i></li></a>
            <a href="https://www.joannalew.com/"><li className="header-icon"><i className="material-icons">notifications</i></li></a>
            <UserProfileContainer />
        </ul>
    );

    const personalGreetingWithoutBtns = () => (
        <ul className='welcome-user nav-content'>
            <UserProfileContainer />
        </ul>
    );

    const sessionButtons = () => (
        <div className="session-btns">
            <Link to='/login'><span className="session-login-btn">Log In</span></Link>
            <Link to='/signup'><span className="session-signup-btn">Sign Up</span></Link>
        </div>
    );

    if (currentUser && path != 'review') 
        return personalGreeting();
    else if (currentUser)
        return personalGreetingWithoutBtns();
    else if (path === 'business' || path === 'review')
        return sessionButtons();
    else
        return sessionLinks();
};

export default Greeting;