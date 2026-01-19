import React from 'react';

/**
 * ContactModal Component
 * Displays a modal popup containing a contact form
 * used to send messages to the site owner.
 */
const ContactModal = () => {
  return (
    <>
      {/* Contact modal wrapper */}
      <div
        className="modal fade"
        id="contact-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="portfolio-modal"
      >
        {/* Centered modal dialog */}
        <div className="modal-dialog modal-center" role="document">
          <div className="modal-content">
            <div className="modal-body">

              {/* Modal title */}
              <div className="modal-title">
                <h1>
                  <span className="point">Let's work together</span>
                </h1>
              </div>

              {/* Modal description text */}
              <div className="modal-description">
                <p>
                  Are you working on something great? I would love to help make it
                  happen! Drop me a letter and start your project right now! Just do
                  it.
                </p>
              </div>

              {/* Contact form inside modal */}
              <div className="modal-form">
                <form action="#" className="js-modal-form">
                  <div className="row form-wrapper">

                    {/* Name and Email fields */}
                    <div className="col-lg-5 col-md-5">
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

                    {/* Message textarea */}
                    <div className="col-lg-7 col-md-7">
                      <div className="form-group">
                        <textarea
                          className="form-field js-field-message"
                          placeholder="Message"
                          required=""
                          defaultValue={""}
                        />
                        {/* Validation indicator */}
                        <span className="form-validation" />
                      </div>
                    </div>

                    {/* Submit and cancel buttons */}
                    <div className="col-md-12">
                      <div className="submit-holder">
                        {/* Submit message button */}
                        <input
                          className="site-btn js-submit-contact"
                          type="submit"
                          defaultValue="Send message"
                        />
                        {/* Close modal button */}
                        <a
                          href="#"
                          className="site-btn gray-btn"
                          data-dismiss="modal"
                        >
                          Back to cv
                        </a>
                      </div>
                    </div>

                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
