import React from 'react';

// Section Components
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Feedback from '../components/Feedback';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Modal Components
import PortfolioModal from '../components/PortfolioModal';
import ContactModal from '../components/ContactModal';
import ThanksModal from '../components/ThanksModal';
import ErrorModal from '../components/ErrorModal';

/**
 * Home - Main landing page component
 * Composes all section and modal components into a complete portfolio page
 */
const Home = () => {
  return (
    <>
      <Header />
      <MobileMenu />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Feedback />
      <Contact />
      <Footer />
      
      {/* Modals */}
      <PortfolioModal />
      <ContactModal />
      <ThanksModal />
      <ErrorModal />
    </>
  );
};

export default Home;

