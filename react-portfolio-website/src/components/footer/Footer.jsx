import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="#" className="footer__logo">Ivan Turner</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        {/*<li><a href="#portfolio">Portfolio</a></li>*/}
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/ivanmturner3' target='_blank'><BsFacebook/></a>
        <a href='https://www.linkedin.com/in/ivanturner/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/ivanturner3' target='_blank'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;{year} Ivan Turner. All rights reserved.</small>
      </div>

      <a href='#' className='to__top'>Back to Top</a>
    </footer>
  )
}

export default Footer