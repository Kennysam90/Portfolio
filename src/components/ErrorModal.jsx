import React from 'react';

/**
 * ErrorModal Component
 * Displays an error message inside a modal dialog
 * when something goes wrong.
 */
const ErrorModal = () => {
  return (
    <>
      {/* Error modal wrapper */}
      <div
        className="modal fade"
        id="error-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="error-modal"
      >
        {/* Modal dialog container */}
        <div className="modal-dialog modal-center" role="document">
          <div className="modal-content">
            <div className="modal-body">

              {/* Modal title */}
              <div className="modal-title">
                <h1>
                  <span className="point">Ooops!</span>
                </h1>
              </div>

              {/* Error message description */}
              <div className="modal-description">
                <p>Something go wrong!</p>
              </div>

              {/* Retry / close modal button */}
              <a href="#" className="site-btn" data-dismiss="modal">
                Try again
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
