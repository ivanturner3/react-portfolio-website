/**
 * Skills Component - Technical Skills Showcase
 * 
 * Displays technical skills and competencies organized into collapsible categories.
 * Uses an accordion-style interface that adapts based on screen size.
 * 
 * Features:
 * - Collapsible skill categories (accordion style)
 * - Responsive behavior: auto-expanded on desktop, collapsed on mobile
 * - Smooth animations for expand/collapse
 * - Icons for visual feedback
 * - Organized by skill domain (Core, Backend, Frontend, etc.)
 * 
 * Skill Categories:
 * - Core Technologies: Primary languages and frameworks
 * - Backend: Server-side development and APIs
 * - Frontend: UI development and React
 * - Data Science & ML: Analytics and machine learning
 * - Cloud, Networking & DevOps: Infrastructure and deployment
 * - Professional Strengths: Soft skills and work approach
 * 
 * Uses useLayoutEffect to set initial state before paint,
 * preventing flash of collapsed state on desktop.
 */

import React, { useState, useLayoutEffect } from 'react';
import './skills.css';
import { BiCheck } from 'react-icons/bi';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Skills = () => {
  // State object to track which skill sections are expanded/collapsed
  const [openSections, setOpenSections] = useState({
    core: false,
    backend: false,
    frontend: false,
    dataScience: false,
    cloud: false,
    strengths: false,
  });

  /**
   * Toggle a specific section's open/closed state
   * @param {string} sectionKey - The key of the section to toggle
   */
  function toggleSection(sectionKey) {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  }

  /**
   * Effect: Set initial state based on screen size
   * Desktop (>= 600px): All sections open by default
   * Mobile (< 600px): All sections collapsed by default
   * Uses useLayoutEffect to prevent flash of incorrect state
   */
  useLayoutEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 600) {
      // Desktop: open all sections by default
      setOpenSections({
        core: true,
        backend: true,
        frontend: true,
        dataScience: true,
        cloud: true,
        strengths: true,
      });
    }
  }, []);

  return (
    <section id='skills'>
      <h5>Not just a pretty face</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        {/* Core Technologies Section */}
        <article className={`skill ${openSections.core ? 'skill--open' : ''}`}>
          <div className="skill__head" onClick={() => toggleSection('core')}>
            <h3>Core Technologies</h3>
            <h3>{openSections.core ? <FaChevronUp /> : <FaChevronDown />}</h3>
          </div>
            <ul className={`skill__list ${openSections.core ? 'active' : 'inactive'}`}>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Python</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Java</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>JavaScript</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>PostgreSQL</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>SQL</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Git</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Flask</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Django</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>SQLAlchemy</p>
              </li>
            </ul>
        </article>
        
        {/* Backend Development Section */}
        <article className={`skill ${openSections.backend ? 'skill--open' : ''}`}>
          <div className="skill__head" onClick={() => toggleSection('backend')}>
            <h3>Back End</h3>
            <h3>{openSections.backend ? <FaChevronUp /> : <FaChevronDown />}</h3>
          </div>
            <ul className={`skill__list ${openSections.backend ? 'active' : 'inactive'}`}>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>API Design &amp; Development</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>ETL Pipelines &amp; Data Ingestion</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Real-Time Data Processing</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Service Integration &amp; Automation</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Database Schema Design &amp; Query Optimization</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Backend System Architecture</p>
              </li>
            </ul>
        </article>
        
        {/* Frontend Development Section */}
        <article className={`skill ${openSections.frontend ? 'skill--open' : ''}`}>
          <div className="skill__head" onClick={() => toggleSection('frontend')}>
            <h3>Front End</h3>
            <h3>{openSections.frontend ? <FaChevronUp /> : <FaChevronDown />}</h3>
          </div>
            <ul className={`skill__list ${openSections.frontend ? 'active' : 'inactive'}`}>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>JavaScript</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>React</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Responsive UI Development</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Frontend-Backend Integration</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>State Management &amp; Component Design</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>REST API Consumption</p>
              </li>
            </ul>
        </article>
        
        {/* Data Science & Machine Learning Section */}
        <article className={`skill ${openSections.dataScience ? 'skill--open' : ''}`}>
          <div className="skill__head" onClick={() => toggleSection('dataScience')}>
            <h3>Data Science & Applied Machine Learning</h3>
            <h3>{openSections.dataScience ? <FaChevronUp /> : <FaChevronDown />}</h3>
          </div>
            <ul className={`skill__list ${openSections.dataScience ? 'active' : 'inactive'}`}>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Exploratory Data Analysis (EDA)</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Feature Engineering</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Regression &amp; Classification</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Supervised &amp; Unsupervised Learning</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Model Evaluation &amp; Validation</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Applied Predictive Analytics</p>
              </li>
            </ul>
        </article>
        
        {/* Cloud, Networking & DevOps Section */}
        <article className={`skill ${openSections.cloud ? 'skill--open' : ''}`}>
          <div className="skill__head" onClick={() => toggleSection('cloud')}>
            <h3>Cloud, Networking & DevOps</h3>
            <h3>{openSections.cloud ? <FaChevronUp /> : <FaChevronDown />}</h3>
          </div>
            <ul className={`skill__list ${openSections.cloud ? 'active' : 'inactive'}`}>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>AWS (VPC, Networking, Security)</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Cloud-Native Architecture</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>DNS &amp; SSL (A records, CNAMEs, certificates)</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Load Balancing &amp; Traffic Routing</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>CI/CD Pipelines</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Monitoring, Alerting &amp; Infrastructure Debugging</p>
              </li>
            </ul>
        </article>
        
        {/* Professional Strengths Section */}
        <article className={`skill ${openSections.strengths ? 'skill--open' : ''}`}>
          <div className="skill__head" onClick={() => toggleSection('strengths')}>
            <h3>Professional Strengths</h3>
            <h3>{openSections.strengths ? <FaChevronUp /> : <FaChevronDown />}</h3>
          </div>
            <ul className={`skill__list ${openSections.strengths ? 'active' : 'inactive'}`}>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>System Ownership &amp; Reliability</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Production Troubleshooting</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Cross-Functional Collaboration</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Translating Business Requirements into Technical Solutions</p>
              </li>
              <li>
                <BiCheck className="skill__list-icon" />
                <p>Clean, Maintainable Architecture</p>
              </li>
            </ul>
        </article>
      </div>
    </section>
  )
}

export default Skills