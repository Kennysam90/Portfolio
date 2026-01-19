import React from 'react';
import Zigzag from './Zigzag';

/**
 * Skills - Skills and expertise section component
 * Displays 4 skill cards with descriptions
 */
const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="row wave-bg">
          <Zigzag />
          <div className="col-md-4 wow slideInLeft">
            <div className="section-sidebar">
              <h2>
                <span className="point">Skills</span>
              </h2>
              <div className="opacity-box">
                <p>
                  I am inspired by creating great work with people who are as
                  passionate as I am about building something awesome.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 wow zoomIn">
                <div className="advantages-box">
                  <h4>Web Development</h4>
                  <div className="opacity-box">
                    <p>
                      Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js,
                      MongoDB, Redis, PostgreSQL, WebStorm.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow zoomIn">
                <hr className="mobile-hr" />
                <div className="advantages-box">
                  <h4>UI\UX Design</h4>
                  <div className="opacity-box">
                    <p>
                      Photoshop, Illustrator, Sketch, Axure, XMind, Prototyping,
                      Wireframing, User Research, Usability Testing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow zoomIn">
                <hr />
                <div className="advantages-box">
                  <h4>Frontend Development</h4>
                  <div className="opacity-box">
                    <p>
                      HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Drupal,
                      Phonegap / Cordova, Ionic, Foundation, Angular.js.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow zoomIn">
                <hr />
                <div className="advantages-box">
                  <h4>Consulting &amp; SEO Audit</h4>
                  <div className="opacity-box">
                    <p>
                      Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO,
                      Google Analytics, ChartBeat, CrazyEgg.
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

export default Skills;

