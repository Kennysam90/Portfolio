import React from 'react'

const Home = () => {
  return (
    <>
      <>
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-xs-8 slideInLeft">
          <div className="logo">
            <span className="point">Danny</span>
          </div>
        </div>
        <div className="col-md-9 hidden-sm hidden-xs slideInRight">
          <div className="main-menu">
            <ul className="list-inline">
              <li>
                <a href="#hello">Hello</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#feedback">Feedback</a>
              </li>
              <li>
                <a href="#contact">Contact me</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xs-4 hidden-lg hidden-md slideInRight">
          <div className="mobile-btn">
            <span>
              <i className="mdi mdi-menu" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Mobile menu */}
  <div className="mob-menu-wrapper hidden-md hidden-lg">
    <div className="close-mob-menu">
      <span>
        <i className="mdi mdi-close" aria-hidden="true" />
      </span>
    </div>
    <div className="mobile-menu">
      <ul>
        <li>
          <a href="#hello">Hello</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#feedback">Feedback</a>
        </li>
        <li>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </div>
  </div>
  {/* Mobile menu */}
  <section id="hello" className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-6 about-img-wrap">
          <div className="about-img wow slideInRight">
            <img
              src="https://previews.aspirity.com/danny/media/hello-section/image.jpg"
              alt=""
              className="img-responsive"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-me wow slideInLeft">
            <div className="about-me-title">
              <h1>
                <span className="point">I am Danny Falcon</span>
              </h1>
            </div>
            <div className="about-me-text">
              <div className="opacity-box">
                <p>
                  I am a Web Developer located in Hartford, Connecticut. I
                  currently work as a part time Remote Junior Web Developer for
                  Coolor, located in Las Vegas. I am looking to take on more
                  work and to increase my skills as a Web Developer.
                </p>
              </div>
            </div>
            <div className="about-me-info">
              <p>
                <span className="span-title">Phone</span>
                <span>+1-203-324-5400</span>
              </p>
              <p>
                <span className="span-title">Email</span>
                <span>dannycrazydev@gmail.com</span>
              </p>
              <p>
                <span className="span-title">Address</span>
                <span>3113 Lochmere Lane, Hartford, CA 06103</span>
              </p>
              <p>
                <span className="span-title">Social</span>
                <span className="span-icons">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/"
                    className="mdi fonts-icons mdi-facebook"
                  />
                  <a
                    target="_blank"
                    href="https://twitter.com/"
                    className="mdi fonts-icons mdi-twitter"
                  />
                  <a
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="mdi fonts-icons mdi-instagram"
                  />
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/"
                    className="mdi fonts-icons mdi-linkedin"
                  />
                  <a
                    target="_blank"
                    href="https://www.behance.net/"
                    className="mdi fonts-icons mdi-behance"
                  />
                  <a
                    target="_blank"
                    href="https://dribbble.com/"
                    className="mdi fonts-icons mdi-dribbble"
                  />
                  <a
                    target="_blank"
                    href="https://medium.com/"
                    className="mdi fonts-icons mdi-medium"
                  />
                  <a
                    target="_blank"
                    href="https://github.com/"
                    className="mdi fonts-icons mdi-github-circle"
                  />
                </span>
              </p>
            </div>
            <div className="about-btns">
              <a
                data-toggle="modal"
                data-target="#contact-modal"
                href="#"
                className="site-btn"
              >
                Contact me
              </a>
              <a
                href="https://previews.aspirity.com/danny/download/example.pdf"
                className="site-btn gray-btn"
              >
                Download cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="skills" className="section">
    <div className="container">
      <div className="row wave-bg">
        <div className="zigzag wow slideInLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 105 20"
            xmlSpace="preserve"
          >
            <g>
              <rect className="st0" width={105} height={20} />
              <g>
                <polyline
                  className="st1"
                  points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                />
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 105 20"
            xmlSpace="preserve"
          >
            <g>
              <rect className="st0" width={105} height={20} />
              <g>
                <polyline
                  className="st1"
                  points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="col-md-4 wow slideInLeft">
          <div className="section-sidebar">
            <h2>
              <span className="point">Skills</span>
            </h2>
            <div className="opacity-box">
              <p>
                I am inspired by creating great work with people who are as
                passionate as I am about building something awesome.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6 wow zoomIn">
              <div className="advantages-box">
                <h4>Web Development</h4>
                <div className="opacity-box">
                  <p>
                    Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js,
                    MongoDB, Redis, PostgreSQL, WebStorm.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow zoomIn">
              <hr className="mobile-hr" />
              <div className="advantages-box">
                <h4>UI\UX Design</h4>
                <div className="opacity-box">
                  <p>
                    Photoshop, Illustrator, Sketch, Axure, XMind, Prototyping,
                    Wireframing, User Research, Usability Testing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow zoomIn">
              <hr />
              <div className="advantages-box">
                <h4>Frontend Development</h4>
                <div className="opacity-box">
                  <p>
                    HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Drupal,
                    Phonegap / Cordova, Ionic, Foundation, Angular.js.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow zoomIn">
              <hr />
              <div className="advantages-box">
                <h4>Consulting &amp; SEO Audit</h4>
                <div className="opacity-box">
                  <p>
                    Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO,
                    Google Analytics, ChartBeat, CrazyEgg.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="experience" className="section">
    <div className="container">
      <div className="row wave-bg">
        <div className="zigzag wow slideInLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 105 20"
            xmlSpace="preserve"
          >
            <g>
              <rect className="st0" width={105} height={20} />
              <g>
                <polyline
                  className="st1"
                  points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                />
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 105 20"
            xmlSpace="preserve"
          >
            <g>
              <rect className="st0" width={105} height={20} />
              <g>
                <polyline
                  className="st1"
                  points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="col-md-4 wow slideInLeft">
          <div className="section-sidebar">
            <h2>
              <span className="point">Experience</span>
            </h2>
            <div className="opacity-box">
              <p>
                I partner with startups, organizations and Fortune 500 companies
                to build digital products that help clients overcome challenges
                and create lasting connections with millions of people every
                day.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8 right-box">
          <div className="row wow zoomIn">
            <div className="col-md-12">
              <div className="about-row">
                <h4 className="about-tittle">Web Developer</h4>
                <p className="about-info">Coolor Studio</p>
                <p>May, 2014 — Present</p>
                <div className="opacity-box">
                  <p>
                    Designed and developed user-friendly website, including
                    optimized check-out page that increased user clicks, and
                    subsequently customer purchases by 20%.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row wow zoomIn">
            <div className="col-md-12">
              <div className="about-row">
                <h4 className="about-tittle">Middle Frontend Developer</h4>
                <p className="about-info">Illskill Agency</p>
                <p>Jan, 2013 — May, 2014</p>
                <div className="opacity-box">
                  <p>
                    Leading a small team on a variety of development projects
                    and delivering solutions to meet and exceed clients’ briefs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row wow zoomIn">
            <div className="col-md-12">
              <div className="about-row">
                <h4 className="about-tittle">IT Specialist</h4>
                <p className="about-info">Motion Studio</p>
                <p>Dec, 2009 — Jan, 2013</p>
                <div className="opacity-box">
                  <p>
                    Revamped web application security applications, minimizing
                    hacker attacks from 2.3% to 0.02%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="education" className="section">
    <div className="container">
      <div className="row wave-bg">
        <div className="zigzag wow slideInLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 105 20"
            xmlSpace="preserve"
          >
            <g>
              <rect className="st0" width={105} height={20} />
              <g>
                <polyline
                  className="st1"
                  points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                />
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 105 20"
            xmlSpace="preserve"
          >
            <g>
              <rect className="st0" width={105} height={20} />
              <g>
                <polyline
                  className="st1"
                  points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                />
              </g>
            </g>
          </svg>
        </div>
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
        <div className="col-md-8 right-box">
          <div className="row wow zoomIn">
            <div className="col-md-12">
              <div className="about-row">
                <h4 className="about-tittle">Google Developer Training</h4>
                <p className="about-info">Google</p>
                <p>Apr, 2015 — May, 2015</p>
                <div className="opacity-box">
                  <p>
                    Learn to use App Engine, Google's Platform as a Service, to
                    build the backend for web apps that scale not only as your
                    user base grows but as request volumes peaks with sudden
                    demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row wow zoomIn">
            <div className="col-md-12">
              <div className="about-row">
                <h4 className="about-tittle">Software Development</h4>
                <p className="about-info">Boston University</p>
                <p>Jan, 2005 — May, 2009</p>
                <div className="opacity-box">
                  <p>
                    BSc (Hons) in Software Development. Outstanding Academic
                    Achievement Award.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
              <li
                className="colored-link"
                data-mixitup-control=""
                data-filter="all"
              >
                All projects
              </li>
              <li
                className="colored-link"
                data-mixitup-control=""
                data-filter=".web-sites"
              >
                Web sites
              </li>
              <li
                className="colored-link"
                data-mixitup-control=""
                data-filter=".ui-ux-design"
              >
                UI\UX design
              </li>
              <li
                className="colored-link"
                data-mixitup-control=""
                data-filter=".frontend"
              >
                Frontend
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="portfolio">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-6 mix web-sites wow flipInX">
                <a
                  data-toggle="modal"
                  data-target="#portfolio-modal"
                  data-name="patty"
                  title="Shop web app “Patty”"
                  href="#"
                  className="portfolio-box"
                >
                  <div className="portfolio-img">
                    <img
                      src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="portfolio-name">
                    <span>Shop web app “Patty”</span>
                  </div>
                  <div className="portfolio-date">
                    <span>April, 2017</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 mix frontend wow flipInX">
                <a
                  data-toggle="modal"
                  data-target="#portfolio-modal"
                  data-name="phoenix"
                  title="Startup website “Phoenix”"
                  href="#"
                  className="portfolio-box"
                >
                  <div className="portfolio-img">
                    <img
                      src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="portfolio-name">
                    <span>Startup website “Phoenix”</span>
                  </div>
                  <div className="portfolio-date">
                    <span>March, 2016</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 mix web-sites wow flipInX">
                <a
                  data-toggle="modal"
                  data-target="#portfolio-modal"
                  data-name="ewesta"
                  title="Corporate chat “eWesta”"
                  href="#"
                  className="portfolio-box"
                >
                  <div className="portfolio-img">
                    <img
                      src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="portfolio-name">
                    <span>Corporate chat “eWesta”</span>
                  </div>
                  <div className="portfolio-date">
                    <span>December, 2015</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 mix frontend wow flipInX">
                <a
                  data-toggle="modal"
                  data-target="#portfolio-modal"
                  data-name="foody"
                  title="Restaraunt web app “Foody”"
                  href="#"
                  className="portfolio-box"
                >
                  <div className="portfolio-img">
                    <img
                      src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="portfolio-name">
                    <span>Restaraunt web app “Foody”</span>
                  </div>
                  <div className="portfolio-date">
                    <span>May, 2014</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 mix ui-ux-design wow flipInX">
                <a
                  data-toggle="modal"
                  data-target="#portfolio-modal"
                  data-name="stark"
                  title="Game website “Stark”"
                  href="#"
                  className="portfolio-box"
                >
                  <div className="portfolio-img">
                    <img
                      src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="portfolio-name">
                    <span>Game website “Stark”</span>
                  </div>
                  <div className="portfolio-date">
                    <span>June, 2014</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 mix web-sites wow flipInX">
                <a
                  data-toggle="modal"
                  data-target="#portfolio-modal"
                  data-name="te4h"
                  title="Blogger website “Te4h”"
                  href="#"
                  className="portfolio-box"
                >
                  <div className="portfolio-img">
                    <img
                      src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-6.jpg"
                      alt=""
                    />
                  </div>
                  <div className="portfolio-name">
                    <span>Blogger website “Te4h”</span>
                  </div>
                  <div className="portfolio-date">
                    <span>April, 2014</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 mix frontend wow flipInX">
                <a
                  data-toggle="modal"
                  data-target="#portfolio-modal"
                  data-name="lamp"
                  title="Product website “Lamp”"
                  href="#"
                  className="portfolio-box"
                >
                  <div className="portfolio-img">
                    <img
                      src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-7.jpg"
                      alt=""
                    />
                  </div>
                  <div className="portfolio-name">
                    <span>Product website “Lamp”</span>
                  </div>
                  <div className="portfolio-date">
                    <span>December, 2013</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 mix ui-ux-design wow flipInX">
                <a
                  data-toggle="modal"
                  data-target="#portfolio-modal"
                  data-name="zebra"
                  title="Blog web app “Zebra”"
                  href="#"
                  className="portfolio-box"
                >
                  <div className="portfolio-img">
                    <img
                      src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-8.jpg"
                      alt=""
                    />
                  </div>
                  <div className="portfolio-name">
                    <span>Blog web app “Zebra”</span>
                  </div>
                  <div className="portfolio-date">
                    <span>March, 2013</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="feedback" className="section">
    <div className="container">
      <div className="row wave-bg">
        <div className="zigzag wow slideInLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 105 20"
            xmlSpace="preserve"
          >
            <g>
              <rect className="st0" width={105} height={20} />
              <g>
                <polyline
                  className="st1"
                  points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                />
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 105 20"
            xmlSpace="preserve"
          >
            <g>
              <rect className="st0" width={105} height={20} />
              <g>
                <polyline
                  className="st1"
                  points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                />
              </g>
            </g>
          </svg>
        </div>
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
        <div className="col-md-8 right-box">
          <div className="row wow zoomIn">
            <div className="col-md-12">
              <div className="feedback-block">
                <img
                  className="feedback-image"
                  src="https://previews.aspirity.com/danny/media/feedback-images/feedback-1.jpg"
                  alt=""
                />
                <h4 className="about-tittle">Stacey Don</h4>
                <p className="about-info">President @ Coolor Studio</p>
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
          <div className="row wow zoomIn">
            <div className="col-md-12">
              <div className="feedback-block">
                <img
                  className="feedback-image"
                  src="https://previews.aspirity.com/danny/media/feedback-images/feedback-2.jpg"
                  alt=""
                />
                <h4 className="about-tittle">Anson Shura</h4>
                <p className="about-info">Project Manager @ Motion Studio</p>
                <div className="opacity-box">
                  <p>
                    “He will always try to do what is required, even if it means
                    performing tasks that are not in the job description or if
                    required to do extra work unexpectedly. However, may
                    sometimes complain about the extra load. Aiming for a top
                    job in the organization. He sets very high standards, aware
                    that this will bring attention and promotion.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row wow zoomIn">
            <div className="col-md-12">
              <div className="feedback-block">
                <img
                  className="feedback-image"
                  src="https://previews.aspirity.com/danny/media/feedback-images/feedback-3.jpg"
                  alt=""
                />
                <h4 className="about-tittle">Gaylord Jefferson</h4>
                <p className="about-info">Developer @ Illskill Agency</p>
                <div className="opacity-box">
                  <p>
                    “When working to a firm but realistic deadline, Danny always
                    completes tasks to a high standard. Care and accuracy is
                    obvious even when put under pressure of time. Prepared to
                    work all the extra hours it takes to meet the deadline.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" className="section">
    <div className="container">
      <div className="row wave-bg">
        <div className="zigzag wow slideInLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 105 20"
            xmlSpace="preserve"
          >
            <g>
              <rect className="st0" width={105} height={20} />
              <g>
                <polyline
                  className="st1"
                  points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                />
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 105 20"
            xmlSpace="preserve"
          >
            <g>
              <rect className="st0" width={105} height={20} />
              <g>
                <polyline
                  className="st1"
                  points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="col-md-4 wow slideInLeft">
          <div className="section-sidebar">
            <h2>
              <span className="point">Contact</span>
            </h2>
            <div className="opacity-box">
              <p>
                Are you working on something great? I would love to help make it
                happen! Drop me a letter and start your project right now! Just
                do it.
              </p>
            </div>
          </div>
        </div>
        <form action="#" className="wow slideInRight js-footer-form">
          <div className="form-wrapper">
            <div className="col-md-3">
              <div className="form-group">
                <input
                  className="form-field js-field-name"
                  type="text"
                  placeholder="Name"
                  required=""
                />
                <span className="form-validation" />
                <span className="form-invalid-icon">
                  <i className="mdi mdi-close" aria-hidden="true" />
                </span>
              </div>
              <div className="form-group">
                <input
                  className="form-field js-field-email"
                  type="email"
                  placeholder="E-mail"
                  required=""
                />
                <span className="form-validation" />
                <span className="form-invalid-icon">
                  <i className="mdi mdi-close" aria-hidden="true" />
                </span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <textarea
                  className="form-field js-field-message"
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
                <span className="form-validation" />
              </div>
              <div className="submit-holder">
                <input
                  className="site-btn"
                  type="submit"
                  defaultValue="Send message"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <footer className="footer text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-12 wow zoomIn">
          <div className="copyright">
            <p>Copyright 2017 Danny.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
  {/* Portfolio modal */}
  {/* Contact me modal */}
  <div
    className="modal fade"
    id="contact-modal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="portfolio-modal"
  >
    <div className="modal-dialog modal-center" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="modal-title">
            <h1>
              <span className="point">Let’s work together</span>
            </h1>
          </div>
          <div className="modal-description">
            <p>
              Are you working on something great? I would love to help make it
              happen! Drop me a letter and start your project right now! Just do
              it.
            </p>
          </div>
          <div className="modal-form">
            <form action="#" className="js-modal-form">
              <div className="row form-wrapper">
                <div className="col-lg-5 col-md-5">
                  <div className="form-group">
                    <input
                      className="form-field js-field-name"
                      type="text"
                      placeholder="Name"
                      required=""
                    />
                    <span className="form-validation" />
                    <span className="form-invalid-icon">
                      <i className="mdi mdi-close" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-field js-field-email"
                      type="email"
                      placeholder="E-mail"
                      required=""
                    />
                    <span className="form-validation" />
                    <span className="form-invalid-icon">
                      <i className="mdi mdi-close" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="form-group">
                    <textarea
                      className="form-field js-field-message"
                      placeholder="Message"
                      required=""
                      defaultValue={""}
                    />
                    <span className="form-validation" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="submit-holder">
                    <input
                      className="site-btn js-submit-contact"
                      type="submit"
                      defaultValue="Send message"
                    />
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
  {/* Contact me modal */}
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
              Thank you for your interest in my work. I’ll contact you just in a
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
  {/* Thank you modal */}
  {/* Error message modal */}
  <div
    className="modal fade"
    id="error-modal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="error-modal"
  >
    <div className="modal-dialog modal-center" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="modal-title">
            <h1>
              <span className="point">Ooops!</span>
            </h1>
          </div>
          <div className="modal-description">
            <p>Something go wrong!</p>
          </div>
          <a href="#" className="site-btn" data-dismiss="modal">
            Try again
          </a>
        </div>
      </div>
    </div>
  </div>
</>

    </>
  )
}

export default Home