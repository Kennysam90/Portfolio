import React from 'react';

/**
 * ThanksModal - Success message modal component
 */
const ThanksModal = () => {
  return (
    <>
      {/* Thank you modal */}
      <div
        className="modal fade"
        id="thanks-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="thanks-modal"
      >
        <div className="modal-dialog modal-center" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-title">
                <h1>
                  <span className="point">Your message has been sent</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>
                  Thank you for your interest in my work. I'll contact you just in a
                  few days. Stay tuned and see you soon, friend!
                </p>
              </div>
              <a href="#" className="site-btn" data-dismiss="modal">
                Back to cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThanksModal;

