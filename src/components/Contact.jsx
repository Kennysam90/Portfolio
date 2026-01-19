import React from 'react';
import Zigzag from './Zigzag';

/**
 * Contact Component
 * Renders the contact section with a sidebar description
 * and a contact form for user messages.
 */
const Contact = () => {
  return (
    // Main contact section wrapper
    <section id="contact" className="section">
      <div className="container">
        <div className="row wave-bg">
          
          {/* Decorative zigzag background component */}
          <Zigzag />

          {/* Left sidebar content */}
          <div className="col-md-4 wow slideInLeft">
            <div className="section-sidebar">
              <h2>
                {/* Section title */}
                <span className="point">Contact</span>
              </h2>

              {/* Description text */}
              <div className="opacity-box">
                <p>
                  Are you working on something great? I would love to help make it
                  happen! Drop me a letter and start your project right now! Just
                  do it.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form action="#" className="wow slideInRight js-footer-form">
            <div className="form-wrapper">

              {/* Name and Email fields */}
              <div className="col-md-3">
                <div className="form-group">
                  {/* Name input */}
                  <input
                    className="form-field js-field-name"
                    type="text"
                    placeholder="Name"
                    required=""
                  />
                  {/* Validation indicator */}
                  <span className="form-validation" />
                  {/* Error icon */}
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true" />
                  </span>
                </div>

                <div className="form-group">
                  {/* Email input */}
                  <input
                    className="form-field js-field-email"
                    type="email"
                    placeholder="E-mail"
                    required=""
                  />
                  {/* Validation indicator */}
                  <span className="form-validation" />
                  {/* Error icon */}
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true" />
                  </span>
                </div>
              </div>

              {/* Message field and submit button */}
              <div className="col-md-5">
                <div className="form-group">
                  {/* Message textarea */}
                  <textarea
                    className="form-field js-field-message"
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                  />
                  {/* Validation indicator */}
                  <span className="form-validation" />
                </div>

                {/* Submit button */}
                <div className="submit-holder">
                  <input
                    className="site-btn"
                    type="submit"
                    defaultValue="Send message"
                  />
                </div>
              </div>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
