import React from 'react';
import Zigzag from './Zigzag';

/**
 * Feedback Component
 * Displays the testimonials / client feedback section
 * showcasing reviews from previous clients.
 */
const Feedback = () => {
  return (
    // Main feedback section wrapper
    <section id="feedback" className="section">
      <div className="container">
        <div className="row wave-bg">

          {/* Decorative zigzag background */}
          <Zigzag />

          {/* Left sidebar with section title and description */}
          <div className="col-md-4 wow slideInLeft">
            <div className="section-sidebar">
              <h2>
                {/* Section heading */}
                <span className="point">Feedback</span>
              </h2>

              {/* Introductory text */}
              <div className="opacity-box">
                <p>
                  Take a look at the reviews of my customers and ensure the
                  quality of my services.
                </p>
              </div>
            </div>
          </div>

          {/* Right content area with feedback entries */}
          <div className="col-md-8 right-box">

            {/* Feedback entry 1 */}
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="feedback-block">
                  {/* Client image */}
                  <img
                    className="feedback-image"
                    src="https://previews.aspirity.com/danny/media/feedback-images/feedback-1.jpg"
                    alt=""
                  />
                  {/* Client name */}
                  <h4 className="about-tittle">Stacey Don</h4>
                  {/* Client position */}
                  <p className="about-info">President @ Coolor Studio</p>

                  {/* Client feedback text */}
                  <div className="opacity-box">
                    <p>
                      "Considers problems as a challenge and enjoys finding
                      creative yet appropriate solutions. Danny is able to work
                      out his own solutions, but also works well with a group to
                      solve problems. Performs most jobs well and has the habit of
                      checking work outcomes. Danny is achieving excellence in
                      some areas but in others is not yet achieving the highest
                      standards.""
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            {/* Feedback entry 2 */}
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="feedback-block">
                  {/* Client image */}
                  <img
                    className="feedback-image"
                    src="https://previews.aspirity.com/danny/media/feedback-images/feedback-2.jpg"
                    alt=""
                  />
                  {/* Client name */}
                  <h4 className="about-tittle">Anson Shura</h4>
                  {/* Client position */}
                  <p className="about-info">Project Manager @ Motion Studio</p>

                  {/* Client feedback text */}
                  <div className="opacity-box">
                    <p>
                      "He will always try to do what is required, even if it means
                      performing tasks that are not in the job description or if
                      required to do extra work unexpectedly. However, may
                      sometimes complain about the extra load. Aiming for a top
                      job in the organization. He sets very high standards, aware
                      that this will bring attention and promotion."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            {/* Feedback entry 3 */}
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="feedback-block">
                  {/* Client image */}
                  <img
                    className="feedback-image"
                    src="https://previews.aspirity.com/danny/media/feedback-images/feedback-3.jpg"
                    alt=""
                  />
                  {/* Client name */}
                  <h4 className="about-tittle">Gaylord Jefferson</h4>
                  {/* Client position */}
                  <p className="about-info">Developer @ Illskill Agency</p>

                  {/* Client feedback text */}
                  <div className="opacity-box">
                    <p>
                      "When working to a firm but realistic deadline, Danny always
                      completes tasks to a high standard. Care and accuracy is
                      obvious even when put under pressure of time. Prepared to
                      work all the extra hours it takes to meet the deadline."
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

export default Feedback;
