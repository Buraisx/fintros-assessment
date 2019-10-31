import React from 'react';
import './Header.scss';
import logo from '../../assets/images/wealthsimple-logo.svg';
import mobileLogo from '../../assets/images/ws-logo-mobile.svg';

/* eslint-disable */
const Header = () => {
  return (
      <header>
          <nav className="header__nav">
            <a className="header__nav-logos" href="google.ca">
              <img src={logo} alt="Wealthsimple" className="header__nav-logo"/>
              <img src={mobileLogo} alt="Wealthsimple" className="header__nav-logo--mobile"/>
            </a>
            <ul className="header__nav-block">
              <li>
                <a 
                  className="header__nav-link"
                  href="/">
                Magazine
                </a>
              </li>
              <li>
                <a
                  className="button"
                  href="google.ca">Start Investing
                </a>
              </li>
            </ul>
            <a className="nav-hamburger">
              <div className="nav-hamburger__container">
                <div className="nav-hamburger__line"></div>
                <div className="nav-hamburger__line"></div>
                <div className="nav-hamburger__line"></div>
              </div>
            </a>
          </nav>
        <section className="hero-section">
          <img src={logo} alt="Wealthsimple logo"/>
          <h1>Magazine</h1>
          <p className="hero-section__subtitle">STORIES AND IDEAS FROM WEALTHSIMPLE</p>
        </section>
      </header>
  );
}

export default Header;
