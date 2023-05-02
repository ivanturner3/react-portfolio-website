import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <section id="home"></section>
      <div className="container header__container">
        <h5> Hello, I'm</h5>
        <h1>Ivan Turner</h1>
        <h5 className='text-light'>Aspiring Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#footer' className='scroll__down'>Scroll Down</a>
      </div>
      
      </header>
  )
}

export default Header