import React from 'react';
import SocialLinks from './SocialLinks';

/**
 * Hero - About/Introduction section component
 * Displays profile image, bio, contact info, and social links
 */
const Hero = () => {
  return (
    <section id="hello" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 about-img-wrap">
            <div className="about-img wow slideInRight">
              <img
                src="https://previews.aspirity.com/danny/media/hello-section/image.jpg"
                alt=""
                className="img-responsive"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-me wow slideInLeft">
              <div className="about-me-title">
                <h1>
                  <span className="point">I am Patrick Francis</span>
                </h1>
              </div>
              <div className="about-me-text">
                <div className="opacity-box">
                  <p>
                    I am a Web Developer located in Hartford, Connecticut. I
                    currently work as a part time Remote Senior Web Developer for
                    Coolor, located in Las Vegas. I am looking to take on more
                    work and to increase my skills as a Web Developer.
                  </p>
                </div>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Phone</span>
                  <span>+1-203-324-5400</span>
                </p>
                <p>
                  <span className="span-title">Email</span>
                  <span>dannycrazydev@gmail.com</span>
                </p>
                <p>
                  <span className="span-title">Address</span>
                  <span>3113 Lochmere Lane, Hartford, CA 06103</span>
                </p>
                <p>
                  <span className="span-title">Social</span>
                  <SocialLinks />
                </p>
              </div>
              <div className="about-btns">
                <a
                  data-toggle="modal"
                  data-target="#contact-modal"
                  href="#"
                  className="site-btn"
                >
                  Contact me
                </a>
                <a
                  href="https://previews.aspirity.com/danny/download/example.pdf"
                  className="site-btn gray-btn"
                >
                  Download cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

