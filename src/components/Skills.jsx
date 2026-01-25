import React from 'react';
import Zigzag from './Zigzag';
import { useQuery } from '@tanstack/react-query';
import { getSkills } from '../context/skillsApi';

/**
 * Skills - Skills and expertise section component
 * Displays skill cards dynamically
 */
const Skills = () => {
  const {
    data: skillsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills,
  });

  if (isLoading || isError || !skillsData) return null;

  // Backend returns ONE object, not an array
  const categories = skillsData.categories?.slice(0, 5) || [];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="row wave-bg">
          <Zigzag />

          {/* LEFT SIDEBAR — UNCHANGED */}
          <div className="col-md-4 wow slideInLeft">
            <div className="section-sidebar">
              <h2>
                <span className="point">Skills</span>
              </h2>
              <div className="opacity-box">
                <p>{skillsData.intro}</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT — UNCHANGED STRUCTURE */}
          <div className="col-md-8">
            <div className="row">
              {categories.map((cat, index) => (
                <div key={index} className="col-md-6 wow zoomIn">
                  <div className="advantages-box">
                    <h4>{cat.category}</h4>
                    <div className="opacity-box">
                      <p>{cat.technologies.join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
