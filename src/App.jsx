import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import './App.css';
import { Navbar } from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skill from './components/skill';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed
      easing: 'ease-in-out', // Smooth animation
      once: true, // Animation happens once
    });
  }, []);

  return (
    <>
      <div className='flex flex-col w-full p-0 h-fit'>
        <Navbar />
        <Hero data-aos="fade-up" />
        <About data-aos="fade-right" />
        <Skill data-aos="fade-left" />
        <Project data-aos="zoom-in" />
        <Contact data-aos="flip-up" />
        <Footer data-aos="fade-up" />
      </div>
    </>
  );
}

export default App;
