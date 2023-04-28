import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ivanturner/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/ivanturner3' target='_blank'><BsGithub/></a>
        <a href='https://www.facebook.com/ivanmturner3' target='_blank'><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials