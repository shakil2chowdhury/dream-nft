import React from 'react';
import nftLogo from '../assets/header/nftlogo.png'
import searchIcon from '../assets/header/search.png'
import switchIcon from '../assets/header/theme-switch.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={nftLogo} alt="nft logo" className='header-logo'/>
            </div>
            <div className="search-bar">
                <div className='searchIcon-container'>
                    <img src={searchIcon} />
                </div>
                <input 
                    className='search-input' 
                    placeholder='Item, Collection or Username'
                />
            </div>
            <div className="header-items">
                <p>Drops</p>
                <p>Create</p>
                <p>Marketplace</p>
            </div>
            <div className="header-actions">
                <div className="switch-container">
                    <img src={switchIcon} alt="theme switch"/>
                </div>
            </div>
            <div className="login-button">
                GET IN
            </div>
        </div>
    );
};

export default Header;