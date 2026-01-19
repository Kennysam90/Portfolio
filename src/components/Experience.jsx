import React from 'react';
import Zigzag from './Zigzag';

/**
 * Experience Component
 * Displays the professional work experience section
 * with multiple job history entries.
 */
const Experience = () => {
  return (
    // Main experience section wrapper
    <section id="experience" className="section">
      <div className="container">
        <div className="row wave-bg">

          {/* Decorative zigzag background element */}
          <Zigzag />

          {/* Left sidebar with section title and description */}
          <div className="col-md-4 wow slideInLeft">
            <div className="section-sidebar">
              <h2>
                {/* Section heading */}
                <span className="point">Experience</span>
              </h2>

              {/* Short introduction text */}
              <div className="opacity-box">
                <p>
                  I partner with startups, organizations and Fortune 500 companies
                  to build digital products that help clients overcome challenges
                  and create lasting connections with millions of people every
                  day.
                </p>
              </div>
            </div>
          </div>

          {/* Right content area with experience entries */}
          <div className="col-md-8 right-box">

            {/* First job experience */}
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="about-row">
                  {/* Job title */}
                  <h4 className="about-tittle">Web Developer</h4>
                  {/* Company name */}
                  <p className="about-info">Coolor Studio</p>
                  {/* Employment period */}
                  <p>May, 2014 — Present</p>

                  {/* Job description */}
                  <div className="opacity-box">
                    <p>
                      Designed and developed user-friendly website, including
                      optimized check-out page that increased user clicks, and
                      subsequently customer purchases by 20%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            {/* Second job experience */}
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="about-row">
                  {/* Job title */}
                  <h4 className="about-tittle">Middle Frontend Developer</h4>
                  {/* Company name */}
                  <p className="about-info">Illskill Agency</p>
                  {/* Employment period */}
                  <p>Jan, 2013 — May, 2014</p>

                  {/* Job description */}
                  <div className="opacity-box">
                    <p>
                      Leading a small team on a variety of development projects
                      and delivering solutions to meet and exceed clients' briefs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            {/* Third job experience */}
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="about-row">
                  {/* Job title */}
                  <h4 className="about-tittle">IT Specialist</h4>
                  {/* Company name */}
                  <p className="about-info">Motion Studio</p>
                  {/* Employment period */}
                  <p>Dec, 2009 — Jan, 2013</p>

                  {/* Job description */}
                  <div className="opacity-box">
                    <p>
                      Revamped web application security applications, minimizing
                      hacker attacks from 2.3% to 0.02%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
