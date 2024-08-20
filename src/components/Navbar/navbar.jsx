import React from 'react';
import Link from 'next/link';
import appData from '../../data/app.json';
import { handleMobileDropdown } from '../../common/navbar';
import Button from 'react-bootstrap/Button';
const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === 'themeL' ? 'light' : ''
      }`}
    >
      <div className="container">
        <Link href="/homepage/home/">
          <a className="logo">
            {theme ? (
              theme === 'themeL' ? (
                <img
                  className="img-log"
                  ref={lr}
                  src={appData.darkLogo}
                  alt="logo"
                />
              ) : (
                <img
                  className="img-log"
                  ref={lr}
                  src={appData.lightLogo}
                  alt="logo"
                />
              )
            ) : (
              <img
                className="img-log"
                ref={lr}
                src={appData.lightLogo}
                alt="logo"
              />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href={`/homepage/home`}>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/about/about`}>
                <a className="nav-link">About</a>
              </Link>
            </li>
         
            <li className="nav-item">
              <Link href={`/blog/blog`}>
                <a className="nav-link">Blog</a>
              </Link>
            </li>
          
            <li className="nav-item">
              <Link href={`/career/careers`}>
                <a className="nav-link">Careers</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/contact/contact`}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            <li className="nav-item BACK">
              <Link href={`/get-quotation/getquote`}>
                <a className="nav-link success-button">
                <Button variant="success" className="nav-button">
                    Get The Quote
                  </Button>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
