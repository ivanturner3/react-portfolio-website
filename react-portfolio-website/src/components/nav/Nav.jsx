import React, { useState, useEffect, useRef } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const navRef = useRef(null);

  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveNav(`#${entry.target.id}`);
      }
    });
  };

  // useEffect hook to set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    const sections = navRef.current.querySelectorAll('section');
   

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav ref={navRef}>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav('#testimonials')}
        className={activeNav === '#testimonials' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
