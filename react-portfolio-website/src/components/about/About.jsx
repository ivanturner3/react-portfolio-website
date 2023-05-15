import React from 'react'
import './about.css'
import fam from '../../assets/whole-fam.png'
import {GrWorkshop} from 'react-icons/gr'
import {TbCertificate} from 'react-icons/tb'
import {GiStairsGoal} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Here's a little</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={fam} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GrWorkshop className='about__icon' />
              <h5>Experienced</h5>
              <small>More than 4 years working in IT</small>
            </article>
            <article className='about__card'>
              <TbCertificate className='about__icon' />
              <h5>Certified</h5>
              <small>Proficient with the latest tools & tech</small>
            </article>
            <article className='about__card'>
              <GiStairsGoal className='about__icon' />
              <h5>Ambitious</h5>
              <small>Each day is a new opportunity to grow</small>
            </article>
          </div>
          <p>
          Hi there! I'm Ivan, a Cloud Configurations Associate with a passion for software development and data science. When I'm not configuring clouds, you can find me tinkering with code, exploring the great outdoors with my fiancée and our furry companions, or cheering on the Eagles (often loudly). By the way, I wrote the code for this website you're browsing. Use the button below to let me know what you think about it!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About