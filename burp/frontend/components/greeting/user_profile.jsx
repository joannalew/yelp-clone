import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {showMenu: false};
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        if (this.dropdownMenu){
            if (!this.dropdownMenu.contains(event.target)){
                this.setState({showMenu: false}, () => {
                    document.removeEventListener('click', this.closeMenu);
                });
            }
        }
    }

    render() {
        return (
            <div className="dropdown-align">
                <button className="user-prof-btn" onClick={ this.showMenu }>
                    <div className="user-prof-align">
                        <img src={this.props.currentUser.photo}></img>
                        <i className="material-icons arrow-dropdown">arrow_drop_down</i>
                    </div>
                </button>

                {
                    this.state.showMenu ? (
                        <div>
                            <div className="form-triangle">
                                <div className="arrow-up"></div>
                            </div>
                            <div className="user-drop-menu" 
                                ref={ (el) => { this.dropdownMenu = el; }} >
                                <div className="dropmenu-item-prof">
                                    <img className="prof-pic" src={ this.props.currentUser.photo }></img>
                                    <div className="prof-info">
                                        <ul>
                                            <li>
                                                <Link to={'/'}>
                                                    { this.props.currentUser.first_name + " " +
                                                      this.props.currentUser.last_name[0] + "." }
                                                </Link>
                                            </li>
                                            <li>{ this.props.currentUser.zip_code }</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="dropmenu-item-logout">
                                    <button onClick={this.props.logout}>Log Out</button>
                                </div>

                            </div>
                        </div>
                    ) : (
                    null
                    )
                }
            
            </div>
        );
    }
}

export default UserProfile;