/**
 * HeaderSocials Component - Social Media Links in Header
 * 
 * Displays social media icons in the header section, positioned vertically
 * along the left side of the hero section (via CSS positioning).
 * 
 * Features:
 * - Icons from react-icons library
 * - Opens links in new tab for better UX
 * - Security attributes (noopener, noreferrer) for external links
 * 
 * Social platforms included:
 * - LinkedIn (professional network)
 * - GitHub (code portfolio)
 * - Facebook (personal/social)
 */

import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        {/* LinkedIn profile link */}
        <a href='https://www.linkedin.com/in/ivanturner/' target='_blank' rel="noreferrer noopener">
          <BsLinkedin />
        </a>
        
        {/* GitHub profile link */}
        <a href='https://github.com/ivanturner3' target='_blank' rel="noreferrer noopener">
          <BsGithub/>
        </a>
        
        {/* Facebook profile link */}
        <a href='https://www.facebook.com/ivanmturner3' target='_blank' rel="noreferrer noopener">
          <BsFacebook/>
        </a>
    </div>
  )
}

export default HeaderSocials