import React from 'react';
import './Footer.scss';
/* eslint-disable */
// Footer component.  Can be refactored
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <ul className="footer__list">
          <li className="footer__list-title"><b>ABOUT US</b></li>
          <li><a className="footer__list-link" href="/">Who we are</a></li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-title"><b>LEARN MORE</b></li>
          <li><a className="footer__list-link" href="/">The Details</a></li>
          <li><a className="footer__list-link" href="/">Investing 101</a></li>
          <li><a className="footer__list-link" href="/">Responsible investing</a></li>
          <li><a className="footer__list-link" href="/">Halal investing</a></li>
          <li><a className="footer__list-link" href="/">Wealthsimple Black</a></li>
          <li><a className="footer__list-link" href="/">Magazine</a></li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-title"><b>LEGAL</b></li>
          <li><a  className="footer__list-link" href="/">Terms of use</a></li>
          <li><a  className="footer__list-link" href="/">Privacy policy</a></li>
          <li><a  className="footer__list-link" href="/">Full disclosure</a></li>
          <li><a  className="footer__list-link" href="/">File a complaint</a></li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-title"><b>DOWNLOAD THE APP</b></li>
          <li className="footer__icon"><a className="apple-icon" href="/"></a></li>
          <li className="footer__icon"><a className="android-icon" href="/"></a></li>
        </ul>
      </div>
      <div className="footer__row">
        <ul className="footer__list">
          <li className="footer__list-title"><b>QUESIONS?</b></li>
          <li><a className="footer__list-link" href="/">Support centre</a></li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-title"><b>LANGUAGE</b></li>
          <li><a className="footer__list-link" href="/">English</a></li>
          <li><a className="footer__list-link" href="/">Francais</a></li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-title"><b>COUNTRY</b></li>
          <li className="footer__icon"><a className="gb-flag" href="/"></a></li>
          <li className="footer__icon"><a className="us-flag" href="/"></a></li>
          <li className="footer__icon"><a className="ca-flag" href="/"></a></li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-title"><b>SOCIAL</b></li>
          <li className="footer__icon"><a className="fb-icon" href="/"></a></li>
          <li className="footer__icon"><a className="tt-icon" href="/"></a></li>
          <li className="footer__icon"><a className="ig-icon" href="/"></a></li>
        </ul>
      </div>
      <div className="footer__ws-links">
        <a className="footer__list-link" href="/">Wealthsimple for Advisors</a>
        <a className="footer__list-link" href="/">Wealthsimple for Work</a>
      </div>
      <p className="footer__copyright">
        By using this website, you accept our Terms of Use and Privacy Policy. Copyright 2019 Wealthsimple Technologies Inc.
      </p>
    </footer>
  );
}

export default Footer;
