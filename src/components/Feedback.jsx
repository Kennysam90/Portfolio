import React from 'react';
import Zigzag from './Zigzag';
import { useQuery } from '@tanstack/react-query';
import { getFeedback } from '../context/feedBackApi';

/**
 * Feedback Component
 */
const Feedback = () => {
  const {
    data: feedbackData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['feedback'],
    queryFn: getFeedback,
  });

  if (isLoading || isError) return null;

  return (
    <section id="feedback" className="section">
      <div className="container">
        <div className="row wave-bg">
          <Zigzag />

          {/* LEFT SIDEBAR */}
          <div className="col-md-4 wow slideInLeft">
            <div className="section-sidebar">
              <h2>
                <span className="point">Feedback</span>
              </h2>
              <div className="opacity-box">
                <p>
                  Take a look at the reviews of my customers and ensure the
                  quality of my services.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT — DYNAMIC */}
          <div className="col-md-8 right-box">
            {feedbackData.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="row wow zoomIn">
                  <div className="col-md-12">
                    <div className="feedback-block">
                      <img
                        className="feedback-image"
                        src={item.image}
                        alt={item.name}
                      />
                      <h4 className="about-tittle">{item.name}</h4>
                      <p className="about-info">{item.position}</p>

                      <div className="opacity-box">
                        <p>{item.feedback}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider, not after last */}
                {index !== feedbackData.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feedback;
