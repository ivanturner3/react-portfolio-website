/**
 * About Component - Professional and Personal Background
 * 
 * A tabbed interface that presents two aspects of the portfolio owner:
 * - Professional Background: Career experience, technical focus, and expertise
 * - Personal Life: Family, interests, and personal values
 * 
 * Features:
 * - Tab-based content switching
 * - Different images for each tab
 * - Responsive layout
 * - Call-to-action button to contact section
 * 
 * The component uses local state to manage which tab is active,
 * allowing users to learn about both professional and personal aspects.
 */

import React, { useState } from 'react'
import './about.css'
import personal from '../../assets/whole-fam.png'
import professional from '../../assets/prof-me.png'

const About = () => {
  // State to track which tab is currently active
  const [activeTab, setActiveTab] = useState('professional')

  return (
    <section id='about'>
      <h5>Here's a little</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          {/* Tab navigation buttons */}
          <div className="about__tabs">
            <button 
              className={`about__tab ${activeTab === 'professional' ? 'active' : ''}`}
              onClick={() => setActiveTab('professional')}
            >
              Professional Background
            </button>
            <button 
              className={`about__tab ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              Personal Life
            </button>
          </div>

          {/* Professional tab content */}
          {activeTab === 'professional' && (
            <div className="about__tab-content">
              <div className="about__me">
                <div className="about__me-image">
                  <img src={professional} alt="Professional background" />
                </div>
              </div>
              <p>
              I'm an Analytics Engineer and backend-focused software developer with experience building production-grade systems that connect data, infrastructure, and application logic.<br /><br />
              Python is my primary language for backend engineering and automation. I design reliable services, APIs, and ETL pipelines using frameworks like Flask, Shiny, and Django, with PostgreSQL at the core of my data architecture. My focus is on building scalable, maintainable systems that perform reliably in production SaaS environments.<br /><br />
              I bring a strong cloud and infrastructure mindset to my work, with hands-on experience designing and troubleshooting systems in AWS. I also serve as a Faculty Teaching Assistant for Eastern University's AWS Cloud Foundations course, where I help reinforce best practices around networking, security, and cloud-native architecture.<br /><br />
              Beyond Python, I have professional experience working across the stack with Java, JavaScript, and React, allowing me to design backend systems and APIs that integrate cleanly with modern web interfaces. I also have practical experience with networking and DNS in enterprise environments, including SSL, load balancing, and system connectivity.<br /><br />
              I'm most effective in roles where I can take ownership of systems end-to-end and build solutions that are reliable, scalable, and easy to operate.
              </p>
              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
          )}

          {/* Personal tab content */}
          {activeTab === 'personal' && (
            <div className="about__tab-content">
              <div className="about__me">
                <div className="about__me-image">
                  <img src={personal} alt="Personal life" />
                </div>
              </div>
              <p>
              Outside of work, you'll usually find me spending time with my wife and our two children. Family is a huge part of my life and keeps everything in perspective, whether that's building reliable systems at work or mastering the art of functioning on limited sleep. It's also reinforced the importance of patience, accountability, and thinking long-term, both in life and in the software I build.<br /><br />
              I enjoy staying active and getting outside whenever possible. Hiking, sports, and anything that gets me away from a screen helps me reset and come back sharper. Some of my best work happens after stepping away for a bit, fresh air has a funny way of untangling complex technical problems.<br /><br />
              I'm naturally curious and a lifelong learner. Outside of formal work, I enjoy reading, experimenting with new technologies, and going down the occasional technical rabbit hole, usually because I asked myself “<i>How does that actually work?</i>” I genuinely enjoy learning for its own sake, and I believe that curiosity is one of the most important traits for staying effective in a fast-moving tech landscape.
              </p>
              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About