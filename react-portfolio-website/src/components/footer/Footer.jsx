import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <a href="#home" className="footer__logo">Ivan Turner</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/ivanmturner3' target='_blank' rel="noreferrer noopener"><BsFacebook/></a>
        <a href='https://www.linkedin.com/in/ivanturner/' target='_blank' rel="noreferrer noopener"><BsLinkedin /></a>
        <a href='https://github.com/ivanturner3' target='_blank' rel="noreferrer noopener"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;{year} Ivan Turner. All rights reserved.</small>
      </div>

      <a href='#home' className='to__top'>Back to Top</a>
    </footer>
  )
}

export default Footer