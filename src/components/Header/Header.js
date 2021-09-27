import React from 'react';
import './Header.css';
import logo from '../../images/global-elite.png'

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="" />
            <h1 className="header-title">Meeting of Global Elite Leaders</h1>
            <h2 className="text-budget">Total Budget: 250 Million USD</h2>
        </div>
    );
};

export default Header;