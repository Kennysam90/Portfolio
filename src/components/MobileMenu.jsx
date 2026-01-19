import React from 'react';

/**
 * MobileMenu - Mobile navigation drawer component
 * Hidden on desktop, shown on mobile devices
 */
const MobileMenu = () => {
  return (
    <>
      {/* Mobile menu */}
      <div className="mob-menu-wrapper hidden-md hidden-lg">
        <div className="close-mob-menu">
          <span>
            <i className="mdi mdi-close" aria-hidden="true" />
          </span>
        </div>
        <div className="mobile-menu">
          <ul>
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
    </>
  );
};

export default MobileMenu;

