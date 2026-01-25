import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPortfolios } from '../context/portfolioApi';

const portfolioFilters = [
  { id: 'all', label: 'All projects' },
  { id: 'WEB SITE', label: 'Web sites' },
  { id: 'UI/UX DESIGN', label: 'UI/UX design' },
  { id: 'FRONTEND', label: 'Frontend' }
];

/**
 * Portfolio - Portfolio section component
 */
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ✅ Fetching data from API
  const {
    data: portfolioData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['portfolios'],
    queryFn: getPortfolios,
  });

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.images?.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.images?.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  // ✅ Filter logic using "categorys" from your JSON
  const filteredProjects = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.categorys === activeFilter);

  if (isLoading) return null; // Or a simple spinner
  if (isError) return null;

  return (
    <section id="portfolio" className="section section-small-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title wow slideInLeft">
              <h2>
                <span className="point">Portfolio</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-sort wow slideInLeft">
              <ul className="list-inline">
                {portfolioFilters.map(filter => (
                  <li 
                    key={filter.id}
                    className={`colored-link ${activeFilter === filter.id ? 'active' : ''}`}
                    onClick={() => handleFilterClick(filter.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {filter.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio">
              <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredProjects.map(project => (
                  <div 
                    key={project.id}
                    className={`col-md-3 col-sm-6 col-xs-6 mix ${project.categorys} wow flipInX`}
                    style={{ 
                      display: 'flex',
                      marginBottom: '30px'
                    }}
                  >
                    <div
                      className="portfolio-box"
                      onClick={() => handleProjectClick(project)}
                      style={{ 
                        cursor: 'pointer',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <div className="portfolio-img" style={{ 
                        aspectRatio: '4/3',
                        overflow: 'hidden',
                        borderRadius: '2px'
                      }}>
                        <img
                          src={project.images?.[0]?.image}
                          alt={project.title}
                          style={{ 
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="portfolio-name">
                        <span>{project.title} "{project.name}"</span>
                      </div>
                      <div className="portfolio-date">
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Modal with Carousel */}
      {selectedProject && (
        <div 
          className="portfolio-modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={handleCloseModal}
        >
          <div 
            className="modal-dialog" 
            role="document" 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#fff',
              borderRadius: '4px',
              maxWidth: '800px',
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative'
            }}
          >
            <div className="modal-body" style={{ padding: '30px' }} data-name={selectedProject.name}>
              <button 
                type="button" 
                className="close" 
                onClick={handleCloseModal}
                style={{ 
                  position: 'absolute', 
                  right: '20px', 
                  top: '15px', 
                  zIndex: 10,
                  fontSize: '28px',
                  cursor: 'pointer',
                  border: 'none',
                  background: 'none'
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-title">
                <h1>
                  <span className="point">{selectedProject.title} "{selectedProject.name}"</span>
                </h1>
              </div>
              <div className="modal-description" style={{ marginTop: '20px' }}>
                <p>
                  {selectedProject.discription}
                </p>
              </div>
              <div className="about-me-info" style={{ marginTop: '20px', display:"flex", justifyContent:"space-between" }}>
                <div>
                <p style={{ marginBottom: '10px' }}>
                  <span className="span-title" style={{ fontWeight: 'bold', marginRight: '10px' }}>Stack:</span>
                  <span>{selectedProject.stackTool}</span>
                </p>
                <p>
                  <span className="span-title" style={{ fontWeight: 'bold', marginRight: '10px' }}>Date:</span>
                  <span>{selectedProject.date}</span>
                </p>
                </div>
                 <div>
                <p style={{ marginBottom: '10px' }}>
                  <span className="span-title" style={{ fontWeight: 'bold', marginRight: '10px' }}>Code:</span>
                  <span>{selectedProject.stackTool}</span>
                </p>
                <p>
                  <span className="span-title" style={{ fontWeight: 'bold', marginRight: '10px' }}>Date:</span>
                  <span>{selectedProject.date}</span>
                </p>
                </div>
              </div>
              
              {/* Image Carousel */}
              <div className="modal-images" style={{ marginTop: '20px', position: 'relative' }}>
                <div style={{ 
                  position: 'relative',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={selectedProject.images[currentImageIndex]?.image}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '400px',
                      height: 'auto',
                      width: '100%',
                      display: 'block'
                    }}
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images?.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        style={{
                          position: 'absolute',
                          left: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          backgroundColor: 'rgba(0, 0, 0, 0.6)',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '50%',
                          width: '40px',
                          height: '40px',
                          cursor: 'pointer',
                          fontSize: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        ‹
                      </button>
                      <button
                        onClick={handleNextImage}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          backgroundColor: 'rgba(0, 0, 0, 0.6)',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '50%',
                          width: '40px',
                          height: '40px',
                          cursor: 'pointer',
                          fontSize: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        ›
                      </button>
                      
                      {/* Image Counter */}
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        color: '#fff',
                        padding: '5px 12px',
                        borderRadius: '15px',
                        fontSize: '14px'
                      }}>
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="about-btns" style={{ marginTop: '25px' }}>
                <a 
                  href={selectedProject.url || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="site-btn" 
                  style={{ 
                    display: 'inline-block',
                    padding: '12px 25px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    marginRight: '10px'
                  }}
                >
                  Visit Website
                </a>
                <a 
                  href="#" 
                  className="site-btn gray-btn" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseModal();
                  }}
                  style={{ 
                    display: 'inline-block',
                    padding: '12px 25px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px'
                  }}
                >
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;