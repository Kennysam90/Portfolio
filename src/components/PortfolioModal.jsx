import React from 'react';

/**
 * PortfolioModal - Portfolio project detail modal component
 * Contains 8 project detail views
 */
const PortfolioModal = () => {
  return (
    <>
      {/* Portfolio modal */}
      <div
        className="modal fade"
        id="portfolio-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="portfolio-modal"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {/* Patty */}
            <div className="modal-body" data-name="patty">
              <div className="modal-title">
                <h1>
                  <span className="point">Startup website for Patty</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>
                  Patty Startup is the perfect shop. I did my best and prepared 12
                  highly customizable pages to present all startup's products. Upon
                  opening this product you will see stylish and unique layouts
                  thoroughly organized into their appropriate groups.
                </p>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Stack</span>
                  <span>HTML, CSS, Bootstrap, Javascript, SVG</span>
                </p>
                <p>
                  <span className="span-title">Date</span>
                  <span>April, 2017</span>
                </p>
              </div>
              <div className="modal-images">
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-1.jpg"
                  alt=""
                />
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-2.jpg"
                  alt=""
                />
              </div>
              <div className="about-btns">
                <a href="#" className="site-btn">
                  VIsit Website
                </a>
                <a href="#" className="site-btn gray-btn" data-dismiss="modal">
                  Back to cv
                </a>
              </div>
            </div>

            {/* Phoenix */}
            <div className="modal-body" data-name="phoenix">
              <div className="modal-title">
                <h1>
                  <span className="point">Startup website for Phoenix</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>
                  Phoenix Startup is the perfect shop. I did my best and prepared 12
                  highly customizable pages to present all startup's products. Upon
                  opening this product you will see stylish and unique layouts
                  thoroughly organized into their appropriate groups.
                </p>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Stack</span>
                  <span>HTML, CSS, Bootstrap, Javascript, SVG</span>
                </p>
                <p>
                  <span className="span-title">Date</span>
                  <span>March, 2016</span>
                </p>
              </div>
              <div className="modal-images">
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-1.jpg"
                  alt=""
                />
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-2.jpg"
                  alt=""
                />
              </div>
              <div className="about-btns">
                <a href="#" className="site-btn">
                  VIsit Website
                </a>
                <a href="#" className="site-btn gray-btn" data-dismiss="modal">
                  Back to cv
                </a>
              </div>
            </div>

            {/* eWesta */}
            <div className="modal-body" data-name="ewesta">
              <div className="modal-title">
                <h1>
                  <span className="point">Startup website for eWesta</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>
                  eWesta Startup is the perfect shop. I did my best and prepared 12
                  highly customizable pages to present all startup's products. Upon
                  opening this product you will see stylish and unique layouts
                  thoroughly organized into their appropriate groups.
                </p>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Stack</span>
                  <span>HTML, CSS, Bootstrap, Javascript, SVG</span>
                </p>
                <p>
                  <span className="span-title">Date</span>
                  <span>December, 2015</span>
                </p>
              </div>
              <div className="modal-images">
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-1.jpg"
                  alt=""
                />
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-2.jpg"
                  alt=""
                />
              </div>
              <div className="about-btns">
                <a href="#" className="site-btn">
                  VIsit Website
                </a>
                <a href="#" className="site-btn gray-btn" data-dismiss="modal">
                  Back to cv
                </a>
              </div>
            </div>

            {/* Foody */}
            <div className="modal-body" data-name="foody">
              <div className="modal-title">
                <h1>
                  <span className="point">Startup website for Foody</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>
                  Foody Startup is the perfect shop. I did my best and prepared 12
                  highly customizable pages to present all startup's products. Upon
                  opening this product you will see stylish and unique layouts
                  thoroughly organized into their appropriate groups.
                </p>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Stack</span>
                  <span>HTML, CSS, Bootstrap, Javascript, SVG</span>
                </p>
                <p>
                  <span className="span-title">Date</span>
                  <span>May, 2014</span>
                </p>
              </div>
              <div className="modal-images">
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-1.jpg"
                  alt=""
                />
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-2.jpg"
                  alt=""
                />
              </div>
              <div className="about-btns">
                <a href="#" className="site-btn">
                  VIsit Website
                </a>
                <a href="#" className="site-btn gray-btn" data-dismiss="modal">
                  Back to cv
                </a>
              </div>
            </div>

            {/* Stark */}
            <div className="modal-body" data-name="stark">
              <div className="modal-title">
                <h1>
                  <span className="point">Startup website for Stark</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>
                  Stark Startup is the perfect shop. I did my best and prepared 12
                  highly customizable pages to present all startup's products. Upon
                  opening this product you will see stylish and unique layouts
                  thoroughly organized into their appropriate groups.
                </p>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Stack</span>
                  <span>HTML, CSS, Bootstrap, Javascript, SVG</span>
                </p>
                <p>
                  <span className="span-title">Date</span>
                  <span>June, 2014</span>
                </p>
              </div>
              <div className="modal-images">
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-1.jpg"
                  alt=""
                />
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-2.jpg"
                  alt=""
                />
              </div>
              <div className="about-btns">
                <a href="#" className="site-btn">
                  VIsit Website
                </a>
                <a href="#" className="site-btn gray-btn" data-dismiss="modal">
                  Back to cv
                </a>
              </div>
            </div>

            {/* Te4h */}
            <div className="modal-body" data-name="te4h">
              <div className="modal-title">
                <h1>
                  <span className="point">Startup website for Te4h</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>
                  Te4h Startup is the perfect shop. I did my best and prepared 12
                  highly customizable pages to present all startup's products. Upon
                  opening this product you will see stylish and unique layouts
                  thoroughly organized into their appropriate groups.
                </p>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Stack</span>
                  <span>HTML, CSS, Bootstrap, Javascript, SVG</span>
                </p>
                <p>
                  <span className="span-title">Date</span>
                  <span>April, 2014</span>
                </p>
              </div>
              <div className="modal-images">
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-1.jpg"
                  alt=""
                />
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-2.jpg"
                  alt=""
                />
              </div>
              <div className="about-btns">
                <a href="#" className="site-btn">
                  VIsit Website
                </a>
                <a href="#" className="site-btn gray-btn" data-dismiss="modal">
                  Back to cv
                </a>
              </div>
            </div>

            {/* Lamp */}
            <div className="modal-body" data-name="lamp">
              <div className="modal-title">
                <h1>
                  <span className="point">Startup website for Lamp</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>
                  Lamp Startup is the perfect shop. I did my best and prepared 12
                  highly customizable pages to present all startup's products. Upon
                  opening this product you will see stylish and unique layouts
                  thoroughly organized into their appropriate groups.
                </p>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Stack</span>
                  <span>HTML, CSS, Bootstrap, Javascript, SVG</span>
                </p>
                <p>
                  <span className="span-title">Date</span>
                  <span>December, 2013</span>
                </p>
              </div>
              <div className="modal-images">
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-1.jpg"
                  alt=""
                />
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-2.jpg"
                  alt=""
                />
              </div>
              <div className="about-btns">
                <a href="#" className="site-btn">
                  VIsit Website
                </a>
                <a href="#" className="site-btn gray-btn" data-dismiss="modal">
                  Back to cv
                </a>
              </div>
            </div>

            {/* Zebra */}
            <div className="modal-body" data-name="zebra">
              <div className="modal-title">
                <h1>
                  <span className="point">Startup website for Zebra</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>
                  Zebra Startup is the perfect shop. I did my best and prepared 12
                  highly customizable pages to present all startup's products. Upon
                  opening this product you will see stylish and unique layouts
                  thoroughly organized into their appropriate groups.
                </p>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Stack</span>
                  <span>HTML, CSS, Bootstrap, Javascript, SVG</span>
                </p>
                <p>
                  <span className="span-title">Date</span>
                  <span>March, 2013</span>
                </p>
              </div>
              <div className="modal-images">
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-1.jpg"
                  alt=""
                />
                <img
                  src="https://previews.aspirity.com/danny/media/modal-images/modal-image-2.jpg"
                  alt=""
                />
              </div>
              <div className="about-btns">
                <a href="#" className="site-btn">
                  VIsit Website
                </a>
                <a href="#" className="site-btn gray-btn" data-dismiss="modal">
                  Back to cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioModal;

