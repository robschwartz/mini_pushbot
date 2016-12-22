import React from 'react';

class NavBar extends React.Component {

    render() {
        return (
            <div className="nav-wrapper">
                <div className="logo">
                    <img id="pushbot-img" src="../../DESIGN_ASSETS/images/pushbot-peeker.png"/>
                    <span>Pushbot<span className="version">1.10.17</span></span>
                </div>
                <div className="nav-items">
                    <span className="nav-item"><a className="navbar-link">TASKS</a></span>
                    <span className="nav-item"><a className="navbar-link">ROUTINES</a></span>
                    <span className="nav-item"><a className="navbar-link">TEMPLATES</a></span>
                    <span className="right-nav-item"><a className="navbar-link">TEAM</a></span>
                </div>
            </div>
        );
    }

}

export default NavBar;