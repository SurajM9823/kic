import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NoticePopup from './components/NoticePopup';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Element name="home">
          <Hero />
        </Element>
        
        <Element name="services">
          <Services />
        </Element>
        
        <Element name="destinations">
          <Destinations />
        </Element>
        
        <Element name="about">
          <AboutUs />
        </Element>
        
        <Element name="testimonials">
          <Testimonials />
        </Element>
        
        <Element name="news">
          <News />
        </Element>
        
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      
      <Footer />
      <NoticePopup />
    </div>
  );
}

export default App;