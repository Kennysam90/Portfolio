import React from 'react';
import Zigzag from './Zigzag';

/**
 * Education Component
 * Displays the education section with academic history
 * and training details.
 */
const Education = () => {
  return (
    // Main education section wrapper
    <section id="education" className="section">
      <div className="container">
        <div className="row wave-bg">

          {/* Decorative zigzag background */}
          <Zigzag />

          {/* Left sidebar with section title and description */}
          <div className="col-md-4 wow slideInLeft">
            <div className="section-sidebar">
              <h2>
                {/* Section heading */}
                <span className="point">Education</span>
              </h2>

              {/* Short description */}
              <div className="opacity-box">
                <p>
                  All my life I have been driven by my strong belief that
                  education is important. I try to learn something new every
                  single day.
                </p>
              </div>
            </div>
          </div>

          {/* Right content area with education entries */}
          <div className="col-md-8 right-box">

            {/* First education entry */}
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="about-row">
                  {/* Course or training title */}
                  <h4 className="about-tittle">Google Developer Training</h4>
                  {/* Institution name */}
                  <p className="about-info">Google</p>
                  {/* Duration */}
                  <p>Apr, 2015 — May, 2015</p>

                  {/* Course description */}
                  <div className="opacity-box">
                    <p>
                      Learn to use App Engine, Google's Platform as a Service, to
                      build the backend for web apps that scale not only as your
                      user base grows but as request volumes peaks with sudden
                      demand.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            {/* Second education entry */}
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="about-row">
                  {/* Degree title */}
                  <h4 className="about-tittle">Software Development</h4>
                  {/* Institution name */}
                  <p className="about-info">Boston University</p>
                  {/* Duration */}
                  <p>Jan, 2005 — May, 2009</p>

                  {/* Degree description */}
                  <div className="opacity-box">
                    <p>
                      BSc (Hons) in Software Development. Outstanding Academic
                      Achievement Award.
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

export default Education;
