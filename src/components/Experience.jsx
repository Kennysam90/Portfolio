import React from 'react';
import Zigzag from './Zigzag';
import { useQuery } from '@tanstack/react-query';
import { getExperience } from '../context/experienceApi';

/**
 * Experience Component
 * Displays the professional work experience section
 */
const Experience = () => {
  const {
    data: experienceData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['experience'],
    queryFn: getExperience,
  });

  if (isLoading || isError) return null;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="row wave-bg">
          <Zigzag />

          {/* LEFT SIDEBAR — UNCHANGED */}
          <div className="col-md-4 wow slideInLeft">
            <div className="section-sidebar">
              <h2>
                <span className="point">Experience</span>
              </h2>
              <div className="opacity-box">
                <p>
                  I partner with startups, organizations and Fortune 500 companies
                  to build digital products that help clients overcome challenges
                  and create lasting connections with millions of people every day.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT — DYNAMIC */}
          <div className="col-md-8 right-box">
            {experienceData.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="row wow zoomIn">
                  <div className="col-md-12">
                    <div className="about-row">
                      <h4 className="about-tittle">{item.title}</h4>
                      <p className="about-info">{item.company}</p>
                      <p>{item.period}</p>

                      <div className="opacity-box">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HR between items (but not after last) */}
                {index !== experienceData.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
