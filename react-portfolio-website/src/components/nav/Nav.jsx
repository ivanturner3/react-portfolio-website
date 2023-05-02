import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import { BiUserCircle, BiMailSend } from 'react-icons/bi';
import { GiSkills } from 'react-icons/gi';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('#');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset;
      const viewportHeight = window.innerHeight;

      if (scrollPosition <= 700) {
        setActiveLink('home');
        return;
      }

      sections.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        const halfViewportHeight = viewportHeight / 2;

        if (top < halfViewportHeight && bottom > halfViewportHeight) {
          setActiveLink(section.id);
          window.history.pushState(null, '', ("#"+section.id));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setActiveLink(event.currentTarget.getAttribute('href'));
    let target = event.target;
  
    while (target && target.tagName !== 'A') {
      target = target.parentNode;
    }
  
    if (target && target.getAttribute('href')) {
      target = target.getAttribute('href');
      console.log(target);
      window.history.pushState(null, '', target);
      setTimeout(() => {
        const section = document.querySelector(target);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
          });
        }
      }, 10);
    }
  };

  return (
    <nav>
      <a 
        href="#home"
        // id="home"
        onClick={handleClick} 
        className={activeLink === 'home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        //id="about"
        onClick={handleClick}
        className={activeLink === 'about' ? 'active' : ''}
      >
        <BiUserCircle />
      </a>
      <a
        href="#skills"
        //id="skills"
        onClick={handleClick}
        className={activeLink === 'skills' ? 'active' : ''}
      >
        <GiSkills />
      </a>
      <a
        href="#testimonials"
        //id="testimonials"
        onClick={handleClick}
        className={activeLink === 'testimonials' ? 'active' : ''}
      >
        <AiOutlineStar />
      </a>
      <a
        href="#contact"
        //id="contact"
        onClick={handleClick}
        className={activeLink === 'contact' ? 'active' : ''}
      >
        <BiMailSend />
      </a>
    </nav>
  );
};

export default Nav;
