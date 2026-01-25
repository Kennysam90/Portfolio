import React from 'react';
import Zigzag from './Zigzag';
import { useQuery } from '@tanstack/react-query';
import { getEducation } from '../context/educationApi';

/**
 * Education Component
 * Displays the education section with academic history
 */
const Education = () => {
  const {
    data: educationData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['education'],
    queryFn: getEducation,
  });

  if (isLoading || isError) return null;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="row wave-bg">
          <Zigzag />

          {/* LEFT SIDEBAR — UNCHANGED */}
          <div className="col-md-4 wow slideInLeft">
            <div className="section-sidebar">
              <h2>
                <span className="point">Education</span>
              </h2>
              <div className="opacity-box">
                <p>
                  All my life I have been driven by my strong belief that
                  education is important. I try to learn something new every
                  single day.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT — DYNAMIC */}
          <div className="col-md-8 right-box">
            {educationData.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="row wow zoomIn">
                  <div className="col-md-12">
                    <div className="about-row">
                      <h4 className="about-tittle">{item.title}</h4>
                      <p className="about-info">{item.institution}</p>
                      <p>{item.period}</p>

                      <div className="opacity-box">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider (not after last item) */}
                {index !== educationData.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
