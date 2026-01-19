import React from 'react';

/**
 * Header - Navigation header component
 * Contains logo and main navigation menu for desktop
 */
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-8 slideInLeft">
            <div className="logo">
              <span className="point">Danny</span>
            </div>
          </div>
          <div className="col-md-9 hidden-sm hidden-xs slideInRight">
            <div className="main-menu">
              <ul className="list-inline">
                <li>
                  <a href="#hello">Hello</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#feedback">Feedback</a>
                </li>
                <li>
                  <a href="#contact">Contact me</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-4 hidden-lg hidden-md slideInRight">
            <div className="mobile-btn">
              <span>
                <i className="mdi mdi-menu" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

